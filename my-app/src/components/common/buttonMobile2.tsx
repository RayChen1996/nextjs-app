import IconSvg from "@/components/Svg/MobileIcon2";
export interface ButtonProp {
  label: string;
  onclick?: () => void;
}
export default function CustomButton({ label, onclick }: ButtonProp) {
  return (
    <div
      onClick={onclick}
      className=" cursor-pointer   mx-auto text-center  bg-no-repeat  h-24  w-60     justify-center items-center   flex    text-white font-bold "
      style={{ backgroundImage: `url(${"/images/buttton.png"})` }}
    >
      <IconSvg />
      <span className="   text-lg    ">{label}</span>
    </div>
  );
}
