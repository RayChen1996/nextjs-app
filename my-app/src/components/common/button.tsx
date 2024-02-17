import ButtonSvg from "@/components/Svg/Button";

export interface ButtonProp {
  label: string;
  point: number;
  onclick?: () => void;
}
export default function CustomButton({ label, onclick, point }: ButtonProp) {
  return (
    <div
      onClick={onclick}
      className=" relative cursor-pointer text-center bg-no-repeat h-24 w-64 justify-center items-center flex flex-col text-white font-bold"
    >
      <ButtonSvg className=" absolute " />
      <span className="absolute text-sm   left-0 top-6  w-full">{label}</span>

      <span className="absolute text-xl bottom-7 ">{point}</span>
    </div>
  );
}
