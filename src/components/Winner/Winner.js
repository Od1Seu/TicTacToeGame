import React from 'react';

const Winner = ({data}) => {
  const element = data.winners.winner ? <h1>Winner: {data.winners.winner}</h1> : <h3>Move: {data.move}</h3>;
  return element
};
export default Winner;