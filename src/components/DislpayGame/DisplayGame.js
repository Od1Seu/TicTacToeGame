import React, {useState} from 'react';
import Button from "../Button/Button";
import RenderTable from "../RenderTable/RenderTable";
import Winner from "../Winner/Winner";

const DisplayGame = ({data, setData,name}) => {
  const [moves, setMoves] = useState(-1);
  const clearFields = () =>{
	setData({...data, winners:{winner: undefined}, cells: Array(9).fill(null) });
	setMoves(1)
  };
  return (
	<>
	  <Button
		onClick = {clearFields}
		data = {data}
		setData = {setData}> Restart Game</Button>
	  <RenderTable data={data} setData={setData}  name={name} setMoves={setMoves} moves={moves}/>
	  <Winner data = {data} setData={setData}/>
	</>
  );
};

export default DisplayGame;