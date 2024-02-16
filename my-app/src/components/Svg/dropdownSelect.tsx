import React from "react";

type FbSvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: FbSvgProps) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.12341 9L12.1234 15L18.1234 9" stroke="#145571" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  );
}
export default SvgComponent;
