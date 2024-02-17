"use client";
import React, { useEffect, useState } from "react";

import clsx from "clsx";
import MessageIcon from "@/components/Svg/message";
import ArrowUpIcon from "@/components/Svg/backtop";
export default function ShortCut() {
  const iconContainerCss =
    "w-[60px] h-[60px] bg-white   bg-primary cursor-pointer flex items-center justify-center rounded-full hover:bg-primary-dark";

  return (
    <div className={"fixed bottom-[45px] right-5 z-10"}>
      <div className={"flex flex-col gap-[12px] items-center justify-center"}>
        <div className={clsx(iconContainerCss)}>
          <MessageIcon />
        </div>

        <div className={clsx("bg-transparent")}>
          <ScrollTop />
        </div>
      </div>
    </div>
  );
}

function ScrollTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // functions
  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={clsx(
        " ",
        showScrollTop
          ? "opacity-1 bg-primary rounded-full  w-[35px] h-[35px] flex items-center justify-center cursor-pointer transition-all duration-300"
          : "opacity-0"
      )}
      onClick={handleScrollTop}
    >
      <ArrowUpIcon className={"scale-75"} />
    </div>
  );
}
