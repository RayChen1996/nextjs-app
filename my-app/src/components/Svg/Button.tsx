import React from "react";

type FbSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: FbSvgProps) {
  return (
    <svg
      width="139"
      height="63"
      viewBox="0 0 139 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_501_28123)" filter="url(#filter0_d_501_28123)">
        <path
          d="M123.386 55H14.9402C14.9402 52.0985 13.7876 49.3158 11.7359 47.2641C9.68421 45.2124 6.90153 44.0598 4 44.0598L4 10.9402C6.90153 10.9402 9.68421 9.78759 11.7359 7.7359C13.7876 5.68421 14.9402 2.90153 14.9402 0H123.386C123.386 2.90153 124.538 5.68421 126.59 7.7359C128.642 9.78759 131.425 10.9402 134.326 10.9402V44.0598C131.425 44.0598 128.642 45.2124 126.59 47.2641C124.538 49.3158 123.386 52.0985 123.386 55Z"
          fill="#145571"
        />
        <path
          d="M18.0847 51.413C17.4348 48.8837 16.1178 46.5753 14.2713 44.7287C12.4247 42.8821 10.1162 41.5651 7.58691 40.9152V14.0848C10.1162 13.4349 12.4247 12.1179 14.2713 10.2713C16.1178 8.4247 17.4348 6.11625 18.0847 3.58694H120.241C120.891 6.11625 122.208 8.4247 124.055 10.2713C125.901 12.1179 128.21 13.4349 130.739 14.0848V40.9152C128.21 41.5651 125.901 42.8821 124.055 44.7287C122.208 46.5753 120.891 48.8837 120.241 51.413H18.0847Z"
          stroke="#FCF2DA"
          stroke-width="0.75"
          stroke-miterlimit="10"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_501_28123"
          x="0"
          y="0"
          width="138.326"
          height="63"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_501_28123"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_501_28123"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_501_28123">
          <rect
            width="130.326"
            height="55"
            fill="white"
            transform="translate(4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgComponent;
