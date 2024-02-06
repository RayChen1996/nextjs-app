import React from "react";
import Image from "next/image";

export default function CenterImage() {
  return (
    <div>
      <div className=" flex justify-around  ">
        <div className="flex justify-center gap-2">
          <button className="btn btn-primary rounded-2xl ">最新</button>
          <button className="btn btn-primary-content rounded-2xl">
            最熱銷
          </button>
          <button className="btn btn-primary-content rounded-2xl">價格</button>
        </div>

        <div className="  sm:hidden lg:block md:block  flex justify-center">
          <button className="btn btn-primary rounded-2xl ">商城推薦</button>
          <button className="btn btn-primary-content rounded-2xl">
            動漫特區
          </button>
          <button className="btn btn-primary-content rounded-2xl">
            新品快遞
          </button>
          <button className="btn btn-primary-content rounded-2xl">
            {/* <Image
              width={20}
              height={20}
              src={"/public/svg/arrow.svg"}
              alt="arrow"
            /> */}
            更多分類
          </button>
        </div>
      </div>
    </div>
  );
}
