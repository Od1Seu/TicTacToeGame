import React from 'react';

const Line = ({width, height}) => {
  const wLine = width || 25;
  const hLine = height || 110;

  return (
	<svg width={wLine} height={hLine} viewBox="0 0 17 289" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <g filter="url(#filter0_dd)">
		<line x1="6.53536" y1="3.46413" x2="10.4536" y2="278.465" stroke="#AF3D38" stroke-width="5" stroke-linecap="round"/>
	  </g>
	  <defs>
		<filter id="filter0_dd" x="0" y="0.928772" width="16.989" height="288.071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
		  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		  <feOffset dy="4"/>
		  <feGaussianBlur stdDeviation="2"/>
		  <feComposite in2="hardAlpha" operator="out"/>
		  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
		  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
		  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
		  <feOffset dy="4"/>
		  <feGaussianBlur stdDeviation="2"/>
		  <feComposite in2="hardAlpha" operator="out"/>
		  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
		  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
		  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
		</filter>
	  </defs>
	</svg>

  );
};

export default Line;