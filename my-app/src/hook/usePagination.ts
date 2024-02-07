import { useEffect, useState } from "react";

export interface UsePaginationProps {
  /**
   * 開頭和結尾始終可見的頁數。
   * @default 1
   */
  boundaryCount?: number;
  /**
   * 總頁數。
   * @default 1
   */
  count?: number;
  /**
   * 當組件不受控制時默認選擇的頁面。
   * @default 1
   */
  defaultPage?: number;
  /**
   * 如果 `true`，則禁用組件.
   * @default false
   */
  disabled?: boolean;
  /**
   * 如果 `true`，則隱藏下一頁按鈕。
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * 如果 `true`，則隱藏上一頁按鈕。
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * 頁面更改時觸發的回調。
   *
   * @param {React.ChangeEvent<unknown>} event 回調的事件源。
   * @param {number} page 所選頁面。
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  /**
   * 當前頁面。
   */
  page?: number;
  /**
   * 如果 `true`，則顯示首頁按鈕。
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * 如果 `true`，則顯示最後一頁按鈕。
   * @default false
   */
  showLastButton?: boolean;
  /**
   * 當前頁前後始終可見的頁數。
   * @default 1
   */
  siblingCount?: number;
}

export interface UsePaginationItem {
  onClick: React.ReactEventHandler;
  type: UsePaginationItemType;
  page: number | null;
  selected: boolean;
  disabled: boolean;
}

export type UsePaginationItemType =
  | "page"
  | "first"
  | "last"
  | "next"
  | "previous"
  | "start-ellipsis"
  | "end-ellipsis";

export interface UsePaginationResult {
  items: UsePaginationItem[];
}

const initialProps: UsePaginationProps = {};

export default function usePagination(
  props = initialProps
): UsePaginationResult {
  const {
    boundaryCount = 1,
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;

  const [page, setPageState] = useState(defaultPage);

  const handleClick = (event: React.ChangeEvent<unknown>, value: number) => {
    // 如果外部參數不合法就存入內部狀態
    if (typeof pageProp !== "number") {
      setPageState(value);
    }
    handleChange?.(event, value);
  };

  useEffect(() => {
    if (typeof pageProp === "number") {
      setPageState(pageProp);
    }
  }, [pageProp]);

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ["first"] : []),
    ...(hidePrevButton ? [] : ["previous"]),
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ["end-ellipsis"]
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
    ...(hideNextButton ? [] : ["next"]),
    ...(showLastButton ? ["last"] : []),
  ] as Array<UsePaginationItemType | number>;

  // Map the button type to its page number
  function buttonPage(type: UsePaginationItemType) {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page - 1;
      case "next":
        return page + 1;
      case "last":
        return count;
      default:
        return null;
    }
  }

  // Convert the basic item list to PaginationItem props objects
  const items: UsePaginationResult["items"] = itemList.map((item) => {
    if (typeof item === "number") {
      return {
        onClick: (event) => {
          handleClick(event, item);
        },
        type: "page",
        page: item,
        selected: item === page,
        disabled,
        "aria-current": item === page ? "true" : undefined,
      };
    } else {
      const _page = buttonPage(item);
      return {
        onClick: (event) => {
          if (typeof _page === "number") {
            handleClick(event, _page);
          }
        },
        type: item,
        page: _page,
        selected: false,
        disabled:
          disabled ||
          (!item.includes("ellipsis") &&
            (item === "next" || item === "last" ? page >= count : page <= 1)),
      };
    }
  });

  return {
    items,
    ...other,
  };
}

// https://dev.to/namirsab/comment/2050
function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}
