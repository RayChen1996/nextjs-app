import React from "react";
import { type ButtonProp } from "@/components/common/button";
import CustomButton from "@/components/common/button";
import MobileButton from "@/components/common/buttonMobile";
import MobileButton2 from "@/components/common/buttonMobile2";

import clsx from "clsx";
export interface NavProp {
  showBackgroundColor: boolean;
}

export default function TopNavbarMobile({ showBackgroundColor }: NavProp) {
  return (
    <div
      className={clsx(
        "flex mb-[90px]  justify-between bg-[#fff]  opacity-80  ",
        showBackgroundColor ? "bg-[#FAF1E6]" : "    "
      )}
    >
      <div className=" flex">
        <MobileButton label={"抽獎點數"}   />
        <MobileButton2 label={"交易點數"}   />
      </div>
      <div className="  flex  ">
        
        
      </div>
    </div>
  );
}
