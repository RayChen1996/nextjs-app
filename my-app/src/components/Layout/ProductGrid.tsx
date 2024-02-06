import React from "react";

/** - 商品網格 */
export default function ProductGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4  w-full mx-auto px-10  grid-cols-1   md:grid-cols-2 lg:grid-cols-5">
      {children}
    </div>
  );
}
