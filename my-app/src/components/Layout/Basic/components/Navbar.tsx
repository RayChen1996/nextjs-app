import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useMemo } from "react";
import Image from "next/image";

import logoSvg from "../../../../../public/logo.svg";

export interface NavbarProps {
  position?: "sticky" | "relative" | "fixed";
}

export default function Navbar({ position = "sticky" }: NavbarProps) {
  const _menu = useMemo(() => links.map(_renderMenu), []);

  return (
    <header className={clsx("top-0 right-0 left-0 z-10", position)}>
      <div className=" bg-black bg-opacity-75">
        <nav className="navbar max-w-screen-xl px-8 mx-auto">
          <div className="navbar-start">
            <Link href="/">
              <Image src={logoSvg} alt="logo" className="h-12 w-12" />
            </Link>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <div className="lg:hidden">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-square text-white"
                >
                  <MenuIcon />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {_menu}
                </ul>
              </div>
            </div>
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white">{_menu}</ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function _renderMenu(item: LinkItemParams) {
  return (
    <li key={item.url}>
      <Link href={item.url}>{item.label}</Link>
    </li>
  );
}

interface LinkItemParams {
  label: string;
  url: string;
}

const links: Array<LinkItemParams> = [
  { label: "關於我們", url: "/about" },
  { label: "商務系統", url: "/system" },
  { label: "加入我們", url: "/join-us" },
  { label: "活動訊息", url: "/posts" },
];
