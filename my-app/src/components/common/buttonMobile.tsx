import Svg from "@/components/Svg/MobileIcon1";
export interface ButtonProp {
  label: string;
  onclick?: () => void;
}
export default function CustomButton({ label, onclick }: ButtonProp) {
  return (
    <div
      onClick={onclick}
      className="rounded-custom cursor-pointer bg-no-repeat h-24 w-60 gap-2 justify-center items-center flex  text-white font-bold "
      style={{ backgroundImage: `url(${"/images/buttton.png"})` }}
    >
      <Svg />
      <span className="text-lg">{label}</span>
    </div>
  );
}
