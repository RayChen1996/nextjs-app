import React from "react";
import Image from "next/image";
import CustomButton2 from "@/components/common/button2";

export default function CenterImage() {
  return (
    <div className=" h-20    flex justify-center items-center m-auto mb-4">
      <div className=" flex    w-full justify-around  items-center  ">
        <div className="flex justify-center gap-2">
          <button className="btn btn-primary rounded-full ">最新</button>
          <button className="btn btn-primary-content rounded-full">
            最熱銷
          </button>
          <button className="btn btn-primary-content rounded-full">價格</button>
        </div>

        <div className="flex justify-center gap-2">
          <CustomButton2
            IsSelect={true}
            hasIcon={false}
            NotifyCount={10}
            showIcon={false}
            label={"商品分類"}
          />
        </div>
      </div>
    </div>
  );
}
