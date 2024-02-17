"use client";
import React, { useState } from "react";
import { type ButtonProp } from "@/components/common/button";
import CustomButton from "@/components/common/button";
import MobileButton from "@/components/common/buttonMobile";
import MobileButton2 from "@/components/common/buttonMobile2";

import AccSvg from "@/components/Svg/drawer/accinfo";
import RewardSvg from "@/components/Svg/drawer/rewardRecord";
import MyPointSvg from "@/components/Svg/drawer/MyPoint";
import ProductSvg from "@/components/Svg/drawer/product";
import BuyRecordSvg from "@/components/Svg/drawer/BuyRecord";
import LogoutSvg from "@/components/Svg/drawer/logout";
import MenuIcon from "@/components/Svg/drawer/menu-icon";
import CloseIcon from "@/components/Svg/drawer/CloseIcon";
import clsx from "clsx";
export interface NavProp {
  showBackgroundColor: boolean;
}

export default function TopNavbarMobile({ showBackgroundColor }: NavProp) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className={clsx(
        "flex mb-[90px]  justify-between bg-[#fff]  opacity-80  ",
        showBackgroundColor ? "bg-[#FAF1E6]" : "    "
      )}
    >
      <div className=" flex">
        <MobileButton label={"抽獎點數"} />
        <MobileButton2 label={"交易點數"} />
      </div>
      <div className="  flex justify-center items-center  ">
        <div className="drawer drawer-end ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              <MenuIcon />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu z-[999px]    w-80 min-h-full   bg-white    text-base-content relative">
              {/* Sidebar content here */}
              <CloseIcon className={" absolute right-0 cursor-pointer "} />

              <li className="mt-10   border-b">
                <a>
                  <AccSvg />
                  帳號資訊
                </a>
              </li>
              <li className="   border-b">
                <a>
                  <RewardSvg />
                  開獎與抽獎紀錄
                </a>
              </li>

              <li className="   border-b">
                <a>
                  <MyPointSvg />
                  我的點數
                </a>
              </li>

              <li className="   border-b">
                <a>
                  <ProductSvg />
                  追蹤商品
                </a>
              </li>
              <li className="   border-b">
                <a>
                  <BuyRecordSvg />
                  購買紀錄
                </a>
              </li>
              <li className="   border-b">
                <a>
                  <LogoutSvg />
                  登出
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const DrawerMenu = () => {
  return <></>;
};
