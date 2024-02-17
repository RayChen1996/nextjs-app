import Svg from "@/components/Svg/MobileIcon1";
import ButtonSvg from "@/components/Svg/Button";
export interface ButtonProp {
  label: string;
  onclick?: () => void;
}
export default function CustomButton({ label, onclick }: ButtonProp) {
  return (
    <div
      onClick={onclick}
      className="rounded-custom cursor-pointer relative bg-no-repeat h-24 justify-center items-center flex  text-white font-bold "
    >
      <ButtonSvg />
      <Svg className="absolute left-4" />

      <span className="text-lg absolute m-auto  left-10 ">{label}</span>
    </div>
  );
}
