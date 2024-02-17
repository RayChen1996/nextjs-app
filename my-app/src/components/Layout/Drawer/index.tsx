"use client";

import { ReactNode, useEffect } from "react";

import { usePathname } from "next/navigation";
import clsx from "clsx";
// NOTE 工具
import useBreakpoint from "@/hook/useBreakpoint";

export const memberDrawerID = "member-drawer";

export default function Drawer({ children }: { children: ReactNode }) {
  const { isBelowLg } = useBreakpoint("lg");
  const pathname = usePathname();
  const isMember = pathname.includes("/member");

  return (
    <div className="drawer lg:drawer-open">
      <input id={memberDrawerID} type="checkbox" className="drawer-toggle" />
      <div className={clsx("drawer-content")}>{children}</div>
      {(isMember || isBelowLg) && (
        <div className="drawer-side shadow-lg">
          <label
            htmlFor={memberDrawerID}
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          {/* --- menu  */}
        </div>
      )}
    </div>
  );
}
