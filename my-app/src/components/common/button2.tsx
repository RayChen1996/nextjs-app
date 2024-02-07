import Svg from "@/components/Svg/reward";
export interface ButtonProp {
  label: string;
  hasIcon: boolean;
  showIcon: boolean;
  NotifyCount: number;
  onclick?: () => void;
}
export default function CustomButton2({
  label,
  showIcon,
  hasIcon,
  NotifyCount,
  onclick,
}: ButtonProp) {
  return (
    <div
      className="  cursor-pointer relative   bg-no-repeat  h-[84px] 　  w-60   justify-center items-center   flex  flex-col text-[#145571] font-bold "
      style={{ backgroundImage: `url(${"/images/buttton2.png"})` }}
    >
      {showIcon && (
        <span className=" absolute text-white font-bold top-0 right-3  rounded-full  text-centers bg-[#F4511E] w-8 h-8 flex justify-center items-center ">
          {NotifyCount}
        </span>
      )}

      <span className=" text-sm flex mx-auto      h-full   px-20 justify-center  items-center gap-2 ">
        {hasIcon && <Svg />}
        {label}
      </span>
    </div>
  );
}
