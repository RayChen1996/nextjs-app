import React from "react";

type FbSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: FbSvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_480_21003)">
        <path
          d="M10.3105 18.25C15.0036 18.25 18.8081 14.5563 18.8081 10C18.8081 5.44365 15.0036 1.75 10.3105 1.75C5.61747 1.75 1.81299 5.44365 1.81299 10C1.81299 14.5563 5.61747 18.25 10.3105 18.25Z"
          fill="#FBCC7F"
          stroke="#FEEEC6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.7094 6.7H8.61088C8.16015 6.7 7.72787 6.87384 7.40915 7.18327C7.09043 7.49271 6.91138 7.91239 6.91138 8.35C6.91138 8.7876 7.09043 9.20729 7.40915 9.51672C7.72787 9.82616 8.16015 10 8.61088 10H12.0099C12.4606 10 12.8929 10.1738 13.2116 10.4833C13.5304 10.7927 13.7094 11.2124 13.7094 11.65C13.7094 12.0876 13.5304 12.5073 13.2116 12.8167C12.8929 13.1262 12.4606 13.3 12.0099 13.3H6.91138"
          fill="#FBCC7F"
        />
        <path
          d="M13.7094 6.7H8.61088C8.16015 6.7 7.72787 6.87384 7.40915 7.18327C7.09043 7.49271 6.91138 7.91239 6.91138 8.35C6.91138 8.7876 7.09043 9.20729 7.40915 9.51672C7.72787 9.82616 8.16015 10 8.61088 10H12.0099C12.4606 10 12.8929 10.1738 13.2116 10.4833C13.5304 10.7927 13.7094 11.2124 13.7094 11.65C13.7094 12.0876 13.5304 12.5073 13.2116 12.8167C12.8929 13.1262 12.4606 13.3 12.0099 13.3H6.91138"
          stroke="#FEEEC6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M10.3103 14.95V5.05V14.95Z" fill="#FBCC7F" />
        <path
          d="M10.3103 14.95V5.05"
          stroke="#FEEEC6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_480_21003">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgComponent;
