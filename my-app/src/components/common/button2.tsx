export interface ButtonProp {
  label: string;
  onclick?: () => void;
}
export default function CustomButton2({ label, onclick }: ButtonProp) {
  return (
    <span
      className="   bg-no-repeat  h-24  w-60   justify-center items-center   flex  flex-col text-[#145571] font-bold "
      style={{ backgroundImage: `url(${"/images/buttton2.png"})` }}
    >
      <span className=" text-sm ">{label}</span>
    </span>
  );
}
