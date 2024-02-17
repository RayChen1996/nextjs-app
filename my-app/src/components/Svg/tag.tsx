import React from "react";

type FbSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: FbSvgProps) {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.862 5.83334H2.41376V14L10.0051 21.3383C11.1396 22.435 12.9982 22.435 14.1327 21.3383L18.4534 17.1617C19.5878 16.065 19.5878 14.2683 18.4534 13.1717L10.862 5.83334Z"
        stroke="#145571"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.24133 10.5113V10.5"
        stroke="#145571"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.1034 5.83334L25.7068 13.1833C25.9769 13.4435 26.1911 13.7526 26.3373 14.0929C26.4835 14.4333 26.5588 14.7982 26.5588 15.1667C26.5588 15.5352 26.4835 15.9001 26.3373 16.2404C26.1911 16.5808 25.9769 16.8899 25.7068 17.15L20.5172 22.1667"
        stroke="#145571"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default SvgComponent;
