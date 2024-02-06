import React from "react";
import { type ButtonProp } from "@/components/common/button";
import CustomButton from "@/components/common/button";
import CustomButton2 from "@/components/common/button2";

export default function TopNavbar() {
  return (
    <div className="flex  justify-between  ">
      <div className=" flex">
        <CustomButton label={"抽獎點數"} point={5000} />
        <CustomButton label={"交易點數"} point={10000} />
      </div>
      <div className="  flex">
        <CustomButton2 label={"購物車"} />
        <CustomButton2 label={"會員中心"} />
        <CustomButton2 label={"登出"} />
      </div>
    </div>
  );
}
