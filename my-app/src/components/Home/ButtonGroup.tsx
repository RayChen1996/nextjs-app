import React from "react";
import Image from "next/image";
import TagSvg from "@/components/Svg/tag";
import SearchSvg from "@/components/Svg/searchicon";

export default function CenterImage() {
  return (
    <div className=" h-20">
      <div className=" flex justify-around  ">
        <div className="flex justify-center gap-2">
          <button className="btn btn-primary rounded-full ">最新</button>
          <button className="btn btn-primary-content rounded-full">
            最熱銷
          </button>
          <button className="btn btn-primary-content rounded-full">價格</button>
        </div>

        <div className="flex justify-center  gap-2">
          <span className=" rounded-full items-center justify-center mx-0 gap-2 pl-4 flex bg-white">
            <SearchSvg />
            <input
              className=" text-black border-opacity-5 border-none focus:border-none active:border-none  rounded-full focus:outline-none"
              type="search"
              placeholder="搜尋"
              name=""
              id=""
            />
          </span>

          <button className="btn btn-primary-content rounded-full">
            <span className=" cursor-pointer hover:bg-opacity-15 w-5 h-5 rounded-full bg-[#fff]   bg-opacity-70 flex items-center justify-center">
              <TagSvg />
            </span>
          </button>
        </div>

        <div className="flex justify-center gap-2">
          <button className="btn btn-primary rounded-full ">商城推薦</button>
          <button className="btn btn-primary-content rounded-full">
            動漫特區
          </button>
          <button className="btn btn-primary-content rounded-full">
            新品快遞
          </button>
          <button className="btn btn-primary-content rounded-full">
            更多分類
          </button>
        </div>
      </div>
    </div>
  );
}
