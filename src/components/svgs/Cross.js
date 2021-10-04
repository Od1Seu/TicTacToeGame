import React from 'react';

const Cross = ({size}) => {
  const sizeCross = size || 100;

  return (
	  <svg width={sizeCross} height={sizeCross} viewBox="0 0 67 59" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 2L65 57M2 57L60.2273 2" stroke="#ABABAF" strokeWidth="5"/>
	  </svg>
  );
};

export default Cross;