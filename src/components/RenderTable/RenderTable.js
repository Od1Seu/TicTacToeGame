import React, {useEffect} from 'react';
import Table from "../Table/Table";

const RenderTable = ({data,setData,name,setMoves, moves}) => {
  	useEffect(()=>{
  	  setMoves(prev=> prev +1 );
	},[data.move, setMoves]);

  return (
	<div>
	  <Table
		winningIndex = {data.winners.index}
		setMoves={setMoves}
		name={name}
		cells = {data.cells}
		setCells = {index =>{
		  setData(prevCell =>{
			if(!prevCell.cells[index] && !prevCell.winners.winner){
			  const data = {...prevCell};
			  data.cells[index] = data.move;
			  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];
			  lines.forEach(line=>{
				const [a, b, c] = line;
				if(data.cells[a] && data.cells[a] === data.cells[b] && data.cells[a] === data.cells[c]){
				  data.winners.winner = data.move;
				  data.winners.index = line;
				  setMoves(-1)
				}else if(moves === 9){
				  data.winners.winner = 'No one won'
				}
			  });
			  data.move = (data.move === name.player1) ? name.player2 : name.player1;
			  return data
			}else return prevCell;
		  })
		}}
	  />
	</div>
  );
};

export default RenderTable;