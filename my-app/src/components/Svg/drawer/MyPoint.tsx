import React from "react";

type SvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: SvgProps) {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21.9048C18.0488 21.9048 22.9524 17.2144 22.9524 11.4286C22.9524 5.64273 18.0488 0.952377 12 0.952377C5.95116 0.952377 1.04761 5.64273 1.04761 11.4286C1.04761 17.2144 5.95116 21.9048 12 21.9048Z"
        fill="#145571"
      />
      <path
        d="M16.381 7.2381H9.80962C9.22867 7.2381 8.67151 7.45885 8.26072 7.85178C7.84992 8.24471 7.61914 8.77764 7.61914 9.33334C7.61914 9.88903 7.84992 10.422 8.26072 10.8149C8.67151 11.2078 9.22867 11.4286 9.80962 11.4286H14.1906C14.7715 11.4286 15.3287 11.6493 15.7395 12.0423C16.1503 12.4352 16.381 12.9681 16.381 13.5238C16.381 14.0795 16.1503 14.6124 15.7395 15.0054C15.3287 15.3983 14.7715 15.6191 14.1906 15.6191H7.61914"
        stroke="#FCF2DA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 17.7143V5.14286"
        stroke="#FCF2DA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default SvgComponent;
