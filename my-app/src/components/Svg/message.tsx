import React from "react";

type FbSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: FbSvgProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.4583 41.6667C20.4345 43.7064 25.0085 44.2589 29.356 43.2245C33.7035 42.1902 37.5387 39.6372 40.1703 36.0254C42.802 32.4136 44.0571 27.9807 43.7095 23.5253C43.362 19.07 41.4345 14.8854 38.2746 11.7254C35.1146 8.56547 30.93 6.63804 26.4747 6.29047C22.0194 5.94289 17.5864 7.19803 13.9746 9.8297C10.3629 12.4614 7.80978 16.2965 6.77547 20.644C5.74116 24.9915 6.29363 29.5655 8.33334 33.5417L4.16667 45.8333L16.4583 41.6667Z"
        stroke="#757575"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6667 25H16.6884"
        stroke="#757575"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25 25H25.0217"
        stroke="#757575"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.3333 25H33.355"
        stroke="#757575"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default SvgComponent;
