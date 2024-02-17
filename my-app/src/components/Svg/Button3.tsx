import React from "react";

type FbSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: FbSvgProps) {
  return (
    <svg
      width="135"
      height="63"
      viewBox="0 0 135 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_596_53848)">
        <path
          d="M119.507 53.8169H15.4931C15.4931 52.4372 15.2217 51.0711 14.6944 49.7964C14.167 48.5218 13.3941 47.3636 12.4198 46.3881C11.4454 45.4125 10.2886 44.6386 9.01554 44.1106C7.74246 43.5827 6.37798 43.3109 5 43.3109V11.506C6.37798 11.506 7.74246 11.2342 9.01554 10.7063C10.2886 10.1783 11.4454 9.40441 12.4198 8.42884C13.3941 7.45327 14.167 6.2951 14.6944 5.02046C15.2217 3.74582 15.4931 2.37966 15.4931 1H119.507C119.507 3.78636 120.612 6.45859 122.58 8.42884C124.548 10.3991 127.217 11.506 130 11.506V43.3109C127.217 43.3109 124.548 44.4178 122.58 46.3881C120.612 48.3583 119.507 51.0305 119.507 53.8169Z"
          fill="#FCF2DA"
          stroke="#145571"
          stroke-miterlimit="10"
        />
        <path
          d="M18.5091 50.3723C17.8858 47.9434 16.6226 45.7266 14.8515 43.9533C13.0804 42.18 10.8662 40.9153 8.44031 40.2912V14.5257C10.8662 13.9016 13.0804 12.6369 14.8515 10.8636C16.6226 9.09031 17.8858 6.87349 18.5091 4.44458H116.491C117.114 6.87349 118.377 9.09031 120.148 10.8636C121.92 12.6369 124.134 13.9016 126.56 14.5257V40.2912C124.134 40.9153 121.92 42.18 120.148 43.9533C118.377 45.7266 117.114 47.9434 116.491 50.3723H18.5091Z"
          stroke="#145571"
          stroke-width="0.75"
          stroke-miterlimit="10"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_596_53848"
          x="0.5"
          y="0.5"
          width="134"
          height="61.8169"
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
            result="effect1_dropShadow_596_53848"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_596_53848"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export default SvgComponent;
