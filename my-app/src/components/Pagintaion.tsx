"use client";

import React, { memo, useCallback, useEffect } from "react";
import clsx from "clsx";
import { deepEqual } from "fast-equals";
import { usePathname, useRouter } from "next/navigation";

import usePagination from "@/hook/usePagination";
import type {
  UsePaginationItem,
  UsePaginationProps,
} from "@/hook/usePagination";
import useCreateQueryUrl, { combinSearchUrl } from "@/hook/useCreateQueryUrl";

export type PagintaionProps = UsePaginationProps;

/** - 頁數組件 */
export default memo(function Pagintaion(props: PagintaionProps) {
  const { push, replace } = useRouter();
  const pathname = usePathname();
  const { searchParams, createQueryString } = useCreateQueryUrl();
  /** - 頁面參數 */
  const pageParams = searchParams.get("page");
  /** - 是否有頁面參數 */
  const hastPageParams = Boolean(pageParams);
  /** - 當前頁面 */
  const page = pageParamsToNumber(pageParams);
  /** - 頁數不合法 */
  const isIllegalPage = illegalPage(page);

  const onChange = useCallback(
    (_: any, p: number) => {
      push(
        combinSearchUrl(pathname, createQueryString(["page", p.toString(10)]))
      );
    },
    [pathname, push, createQueryString]
  );

  const { items } = usePagination({
    ...props,
    page: !isIllegalPage ? page : 1,
    onChange,
  });

  useEffect(() => {
    // 有給參數但是不合法就覆蓋
    if (hastPageParams && isIllegalPage) {
      replace(
        combinSearchUrl(pathname, createQueryString(["page", (1).toString(10)]))
      );
    }
  }, [replace, pathname, createQueryString, isIllegalPage, hastPageParams]);

  return (
    <div className="flex justify-center">
      <div className="join">
        {items.map((item, index) => (
          <PaginationItem key={"page" + index} {...item} />
        ))}
      </div>
    </div>
  );
});
/** - 頁面參數轉數字 */
function pageParamsToNumber(params: string | null) {
  return typeof params === "string" ? parseInt(params, 10) : NaN;
}
/** - 判斷是否不合法頁數 */
function illegalPage(page: number | null) {
  return Number.isNaN(page) || page === 0;
}

/** - 頁數物件 */
const PaginationItem = memo(function PaginationItem({
  type,
  onClick,
  page,
  selected,
  disabled,
}: UsePaginationItem) {
  const _icon = normalizedIcons[type];

  if (type === "start-ellipsis" || type === "end-ellipsis") {
    return (
      <button
        className={clsx(
          "join-item",
          "btn",
          "btn-disabled",
          "btn-md",
          "max-sm:btn-sm",
          "max-md:btn-md"
        )}
      >
        ...
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "join-item",
        "btn",
        "btn-md",
        "max-sm:btn-sm",
        "max-md:btn-md",
        selected ? "btn-active" : null
      )}
    >
      {type === "page" && page}
      {_icon ? _icon : null}
    </button>
  );
},
deepEqual);

/** - 圖標列表 */
const normalizedIcons: Record<
  Exclude<
    UsePaginationItem["type"],
    "start-ellipsis" | "end-ellipsis" | "page"
  >,
  JSX.Element
> &
  Record<string, JSX.Element | undefined> = {
  previous: <span className="material-icons">navigate_before</span>,
  next: <span className="material-icons">navigate_next</span>,
  first: <span className="material-icons">first_page</span>,
  last: <span className="material-icons">last_page</span>,
};
