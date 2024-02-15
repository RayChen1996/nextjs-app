"use client";

import React, { Fragment, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
// components
import clsx from "clsx";
 

// icons
// import LogoImage from "../../../public/dore/logo-sm.svg";
// import MenuIcon from "../../../public/dore/icons/nav-menu-icon.svg";
// import NavPhoneIcon from "../../../public/dore/icons/nav-phone-icon.svg";
// import NavArrowRight from "../../../public/dore/icons/arrow-right-green.svg";
// import NavGlobeIcon from "../../../public/dore/icons/mobile-nav-globe.svg";
// import NavUserIcon from "../../../public/dore/icons/mobile-nav-user.svg";

export default function MobileHeaderNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const rotuer = useRouter();
  return (
    <div>
      {/* 補回 nav */}
      <div className={"h-[70px]"} />
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
        />
        {/* Header */}
        <div
          className={clsx(
            "bg-background-dark",
            "px-5",
            `min-h-[70px] `,
            "flex items-center justify-between",
            "fixed z-40 top-0 w-full"
          )}
        >
          <div
            className={
              "mx-auto max-w-screen-lg px-2 container flex items-center justify-between"
            }
          >
            <div
              onClick={() => {
                rotuer.push("/");
              }}
              className={"cursor-pointer flex items-center gap-2"}
            >
              {/* <LogoImage className={"w-[50px] h-[55px]"} /> */}
              <div>
                <h1
                  className={"text-white font-bold flex flex-col items-center"}
                >
                  {/* <p className={"text-xl"}>希望杜耳</p>
                  <p className={"text-sm"}>Hope Dore</p> */}
                </h1>
              </div>
            </div>
          </div>
          {/* icons */}
          <div className={"flex items-center gap-4"}>
            {/* <NavContactButton /> */}
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                {/* <MenuIcon
                  onClick={() => {
                    setDrawerOpen((e) => !e);
                  }}
                  className={"cursor-pointer "}
                /> */}
              </label>
            </div>
          </div>
        </div>
        {/* Drawer */}
        <DrawerContents
          handleClose={() => {
            setDrawerOpen(false);
          }}
        />
      </div>
    </div>
  );
}

// ANCHOR Contact

const NavContactButton = () => {
  return (
    <a className={"py-1 flex items-center gap-3 "} href="tel:+886-2-28310009">
      <div className={"cursor-pointer"}>
        {/* <NavPhoneIcon /> */}
      </div>
    </a>
  );
};
//Drawer Content
interface NavContactButtonProps {
  handleClose: () => void;
}
const DrawerContents = ({ handleClose }: NavContactButtonProps) => {
   
  return (
    <div className="drawer-side z-20 ">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
        onClick={handleClose}
      />

      <div
        className={clsx(
          "w-[320px] max-w-[100%] bg-base-200 text-base-content",
          "h-full",
          "py-[30px] ",
          "bg-white",
          "mt-[70px]"
        )}
      >
        <ul>
          

          <li>
            <MemberCenter />
          </li>
          <li>
            <NavLanguages />
          </li>
        </ul>
      </div>
    </div>
  );
};

//
interface NavItemProps {
  label: string;
  path: string;
  subLists?: { label: string; path: string }[];
  handleClose: () => void;
}
const NavListItem = (props: NavItemProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { label, path, subLists } = props;
  const isSublist = subLists?.length;
  const isOutsideLink =
    path?.startsWith("https://") || path?.startsWith("http://");

  const handleClose = () => {
    const elem = document.activeElement as HTMLParagraphElement;
    elem?.blur();
  };

  return (
    <div
      className={clsx(
        "pt-[20px] px-[20px]",

        open && "bg-background-100 border-l-[3px] border-thirdly",
        "duration-300"
      )}
    >
      {/* trigger */}
      {path.startsWith("https://") || path.startsWith("http://") ? (
        <a href={path} target="_blank" rel={"noopener noreferrer"}>
          <div
            className={clsx("flex item-center justify-between cursor-pointer")}
            onClick={() => {
              if (isSublist) {
                setOpen((e) => !e);
              } else {
                // router.push(path);
                props.handleClose();
              }
            }}
          >
            <h4 className={clsx(open ? "text-thirdly" : "text-text-main")}>
              {label}
            </h4>
            {isSublist && (
              <NavArrowRight
                className={clsx(
                  "transition-transform",
                  open ? "rotate-90" : "rotate-0"
                )}
              />
            )}
          </div>
        </a>
      ) : (
        <div
          className={clsx("flex item-center justify-between cursor-pointer")}
          onClick={() => {
            if (isSublist) {
              setOpen((e) => !e);
            } else {
              router.push(path);
              props.handleClose();
            }
          }}
        >
          <h4 className={clsx(open ? "text-thirdly" : "text-text-main")}>
            {label}
          </h4>
      
        </div>
      )}

      <div className="collapse rounded-none">
        <input type="checkbox" checked={open} className={"hidden peer"} />
        <div className="collapse-content p-0 pt-2">
          {isSublist &&
            subLists.map((item, index) => (
              <Fragment key={index}>
                {item.path.startsWith("https://") ||
                item.path.startsWith("http://") ? (
                  <a href={path} target="_blank" rel={"noopener noreferrer"}>
                    <div
                      className={clsx(
                        "flex item-center justify-between cursor-pointer py-[10px] pl-[1.5rem]"
                      )}
                      onClick={() => {
                        // router.push(item.path);
                        // console.log("push");
                        // console.log(props);
                        // props.handleClose();
                      }}
                    >
                      <h4 className={"text-text-subtext text-sm"}>
                        {item.label}
                      </h4>
                    </div>
                  </a>
                ) : (
                  <div
                    className={clsx(
                      "flex item-center justify-between cursor-pointer py-[10px] pl-[1.5rem]"
                    )}
                    onClick={() => {
                      router.push(item.path);
                      console.log("push");
                      console.log(props);
                      props.handleClose();
                    }}
                  >
                    <h4 className={"text-text-subtext text-sm"}>
                      {item.label}
                    </h4>
                  </div>
                )}
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

// NavLanguageItem

const NavLanguages = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        "pt-[20px]",
        open && "bg-background-100 border-l-[3px] border-thirdly",
        "duration-300"
      )}
    >
      {/* trigger */}
      <div
        className={clsx(
          "flex item-center justify-between cursor-pointer px-[20px]"
        )}
        onClick={() => {
          setOpen((e) => !e);
        }}
      >
        <div className={"flex items-center gap-[6px]  "}>
          {/* <NavGlobeIcon /> */}
          <h4 className={clsx(open ? "text-thirdly" : "text-text-main")}>
            繁體中文
          </h4>
        </div>
        {/* <NavArrowRight
          className={clsx(
            "transition-transform",
            open ? "rotate-90" : "rotate-0"
          )}
        /> */}
      </div>

      <div className="collapse rounded-none">
        <input type="checkbox" checked={open} className={"hidden peer"} />
        <div className="collapse-content p-0 pt-2">
          
        </div>
      </div>
    </div>
  );
};

const MemberCenter = () => {
  return (
    <div className={clsx("pt-[20px]  px-[20px]")}>
      <div className={clsx("flex items-center cursor-pointer gap-[6px]")}>
        {/* <NavUserIcon className={"flex "} /> */}
        <h4 className={"text-text-main"}>學員登入</h4>
      </div>
    </div>
  );
};
