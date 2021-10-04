import React, {useEffect, useState} from 'react';

const Players = ({data, name}) => {
  const [scorePl1, setScorePl1] = useState(0);
  const [scorePl2, setScorePl2] = useState(0);

  const countWinners = () =>{
	if(data.winners.winner === name.player1){
	  setScorePl1(prev => prev +1)
	}
	else if (data.winners.winner === name.player2){
	  setScorePl2(prev => prev +1)
	}
  };
  useEffect(()=>{
	countWinners()
	// eslint-disable-next-line react-hooks/exhaustive-deps
  },[data.winners.winner]);

  return (
	<div>
	  	<h3>Score: </h3>
	  	<h4>{name.player1}  -  plays Circle(X):   {scorePl1}</h4>
	  	<h4>{name.player2}  - plays Cross (O):   {scorePl2}</h4>
	</div>
  );
};

export default Players;