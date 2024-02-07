export interface ButtonProp {
  label: string;
  point: number;
  onclick?: () => void;
}
export default function CustomButton({ label, onclick, point }: ButtonProp) {
  return (
    <div
      onClick={onclick}
      className=" cursor-pointer  text-center  bg-no-repeat  h-24  w-64    justify-center items-center   flex  flex-col text-white font-bold "
      style={{ backgroundImage: `url(${"/images/buttton.png"})` }}
    >
      <span className="   text-sm  mx-auto  px-24 w-full ">{label}</span>
      {/* <br /> */}
      <span className=" text-xl   mx-auto  px-24 ">{point}</span>
    </div>
  );
}
