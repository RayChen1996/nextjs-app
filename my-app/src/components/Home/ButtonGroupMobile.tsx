import React from "react";
import Image from "next/image";
import CustomButton2 from "@/components/common/button2";

export default function CenterImage() {
  return (
    <div className=" h-20">
      <div className=" flex justify-around  ">
        <div className="flex justify-center gap-2">
          <button className="btn btn-primary rounded-2xl ">最新</button>
          <button className="btn btn-primary-content rounded-2xl">
            最熱銷
          </button>
          <button className="btn btn-primary-content rounded-2xl">價格</button>
        </div>

        <div className="flex justify-center gap-2">
        <CustomButton2
          hasIcon={true}
          NotifyCount={10}
          showIcon={true}
          label={"開獎"}
        />
        </div>
      </div>
    </div>
  );
}
