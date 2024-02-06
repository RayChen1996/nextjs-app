"use client";

import React, { DOMAttributes, memo } from "react";
import Link from "next/link";
import numbro from "numbro";
import { deepEqual } from "fast-equals";
import clsx from "clsx";
import NextImage from "next/image";
import { gql, useMutation } from "@apollo/client";
// NOTE 型別
import type { Product } from "@/schema/products";
// NOTE zustand

export type ProductItemProps = {
  data?: Partial<Product>;
  mode?: "cart" | "normal";
  index?: number;
  loading?: boolean;
};
/** - 商品列表物件 */
export default memo(function ProductItem({
  data,
  mode = "normal",
  index,
  loading,
}: ProductItemProps) {
  const id = data?.id;
  const _loading = !data || loading;
  console.log(data);
  function Component({ children }: { children: React.ReactNode }) {
    if (id && !_loading) {
      return (
        <Link
          href={`/product/${id}`}
          className="card card-compact bg-base-100 shadow"
        >
          {children}
        </Link>
      );
    } else {
      return (
        <div className="card card-compact bg-opacity-80 bg-white transition-opacity shadow">
          {children}
        </div>
      );
    }
  }
  return (
    <Component>
      <figure className="relative aspect-square">
        {_loading ? (
          <div role="status" className="skeleton w-full h-full rounded" />
        ) : data?.photos?.[0] ? (
          <NextImage
            src={data.photos[0]}
            alt={data.id ?? "product-image"}
            fill
            sizes={"5"}
            className="object-cover"
          />
        ) : null}
        {typeof index === "number" ? (
          <div className="absolute top-2 left-2">
            <div className="bg-red-400 px-4 py-2 rounded-lg">
              <span className="text-white font-mono ">{index + 1}</span>
            </div>
          </div>
        ) : null}
      </figure>
      <div className="card-body">
        <span className="text-lg text-black">{data?.name}測試</span>
        <div className="flex items-end gap-2">
          <span className="text-lg text-black">
            {numbro(
              (data?.discountPrice
                ? data?.discountPrice
                : data?.originalPrice) ?? 0
            ).format({
              thousandSeparated: true,
              prefix: "NT$",
            })}
          </span>
        </div>
      </div>
    </Component>
  );
},
deepEqual);

type CartButtonProps = {
  id?: string;
  disabled?: boolean;
};
/** - 購物車按鈕 */
const CartButton = memo(function CartButton({ id, disabled }: CartButtonProps) {
  const _disabled = Boolean(disabled);
  const _addCart: NonNullable<DOMAttributes<HTMLButtonElement>["onClick"]> = (
    event
  ) => {
    event.preventDefault();
  };
  return (
    <button
      type="button"
      onClick={_addCart}
      disabled={_disabled}
      className={clsx("btn btn-sm btn-primary")}
    >
      加入購物車
    </button>
  );
});
