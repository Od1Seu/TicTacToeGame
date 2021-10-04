import React from 'react';

const Circle = ({size}) =>{
  const sizeCirce = size || 100;

  return (
	<svg width={sizeCirce} height={sizeCirce} viewBox="0 0 67 65" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <path d="M64 32.5C64 48.7073 50.431 62 33.5 62C16.569 62 3 48.7073 3 32.5C3 16.2927 16.569 3 33.5 3C50.431 3 64 16.2927 64 32.5Z" fill="#44425E" stroke="#ABABAF" strokeWidth="6"/>
	</svg>

  )
};

export default Circle;