import React from "react";
import Image from "next/image";

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
