import React from "react";

type FbSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: FbSvgProps) {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.125 8.25H28.875"
        stroke="#145571"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.125 16.5H28.875"
        stroke="#145571"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.125 24.75H28.875"
        stroke="#145571"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default SvgComponent;
