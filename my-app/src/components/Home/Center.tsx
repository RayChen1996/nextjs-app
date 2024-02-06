import React from "react";
import Image from "next/image";
import LogoImage from "../../../public/images/home_logo.svg";
export default function CenterImage() {
  return (
    <div className=" mt-[-80px] h-56">
      <div className=" flex justify-center">
        <Image src={LogoImage} alt="homeLogo" />
      </div>
    </div>
  );
}
