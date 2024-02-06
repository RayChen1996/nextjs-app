export interface ButtonProp {
  label: string;
  point: number;
  onclick?: () => void;
}
export default function CustomButton({ label, onclick, point }: ButtonProp) {
  return (
    <span
      className="   bg-no-repeat  h-24  w-60    justify-center items-center   flex  flex-col text-white font-bold "
      style={{ backgroundImage: `url(${"/images/buttton.png"})` }}
    >
      <span className=" text-sm ">{label}</span>
      {/* <br /> */}
      <span className=" text-xl  ">{point}</span>
    </span>
  );
}
