"use client";
import React from "react";
import { type ButtonProp } from "@/components/common/button";
import CustomButton from "@/components/common/button";
import CustomButton2 from "@/components/common/button2";
import clsx from "clsx";
export interface NavProp {
  showBackgroundColor: boolean;
}

export default function TopNavbar({ showBackgroundColor }: NavProp) {
  return (
    <div
      className={clsx(
        "flex  justify-between   ",
        showBackgroundColor
          ? "bg-[#FAF1E6]"
          : "  bg-gradient-to-b  from-[#5D5D5D] to-[#14557100]  "
      )}
    >
      <div className=" flex">
        <CustomButton label={"抽獎點數"} point={5000} />
        <CustomButton label={"交易點數"} point={10000} />
      </div>
      <div className="  flex   mt-3  ">
        <CustomButton2
          hasIcon={true}
          notifyCount={10}
          showIcon={true}
          label={"開獎"}
        />
        <CustomButton2
          hasIcon={false}
          notifyCount={1}
          showIcon={false}
          label={"購物車"}
        />
        <CustomButton2
          hasIcon={false}
          notifyCount={1}
          showIcon={false}
          label={"會員中心"}
        />
      </div>
    </div>
  );
}
