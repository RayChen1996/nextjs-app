"use client";
import Svg from "@/components/Svg/reward";
import ArrowSvg from "@/components/Svg/dropdownSelect";
import ButtonSvg from "@/components/Svg/Button2";
import ButtonSvg3 from "@/components/Svg/Button3";

export interface ButtonProp {
  label: string;
  hasIcon: boolean;
  showIcon: boolean;
  notifyCount: number;
  isSelect?: Boolean;
  onclick?: () => void;
}
export default function CustomButton2({
  label,
  showIcon = false,
  hasIcon = false,
  notifyCount = 0,
  isSelect = false,
  onclick,
}: ButtonProp) {
  return isSelect ? (
    // 手機板商品分類
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="">
        <div className=" relative  cursor-pointer     bg-no-repeat  h-[84px]   w-64     justify-center items-center   flex  flex-col text-[#145571] font-bold ">
          {/* <Image alt="feature-icon" src={ButtonSvg} fill /> */}

          <ButtonSvg3 className="  " />
          {showIcon && (
            <span className=" absolute text-white font-bold top-0   rounded-full  text-centers bg-[#F4511E] w-8 h-8 flex justify-center items-center ">
              {notifyCount}
            </span>
          )}

          <span className=" absolute text-lg flex mx-auto  justify-center  items-center ">
            {hasIcon && <Svg />}
            {label}
            {isSelect && (
              <span className="  flex mx-auto    justify-center  items-center  ">
                <ArrowSvg />
              </span>
            )}
          </span>
        </div>
      </div>
      <ul
        tabIndex={0}
        className=" text-[#145571] dropdown-content z-[1] menu p-2 shadow  bg-[#FCF2DA]  rounded-box w-52"
      >
        <li>
          <a>商城推薦</a>
        </li>
        <li>
          <a>動漫特區</a>
        </li>
        <li>
          <a>新品快遞</a>
        </li>
      </ul>
    </div>
  ) : (
    // 桌面板
    <div className="  cursor-pointer relative   bg-no-repeat  h-[84px] 　  w-40   justify-center items-center   flex  flex-col text-[#145571] font-bold ">
      {/* <ButtonSvg className=" absolute" /> */}
      {/* <ButtonSvg className="  absolute" /> */}
      <ButtonSvg className="  " />
      {showIcon && (
        <span className=" absolute text-white font-bold top-0 right-3  rounded-full  text-centers bg-[#F4511E] w-8 h-8 flex justify-center items-center ">
          {notifyCount}
        </span>
      )}

      <span className=" absolute text-lg flex mx-auto  justify-center  items-center gap-2 ">
        {hasIcon && <Svg />}
        {label}
        {isSelect && (
          <span className=" absolute flex mx-auto    justify-center  items-center gap-2 ">
            <ArrowSvg />
          </span>
        )}
      </span>
    </div>
  );
}
