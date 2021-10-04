import React, {useState} from 'react';
import Button from "../Button/Button";

const Input = ({namePlayer2, namePlayer1,...props}) => {
  const [name, setName] = useState({
	player1: '',
	player2: ''
  });

  return(
  	  <>
	  <input type='text' value={name.player1} placeholder={namePlayer1} onChange={(e)=>setName({...name, player1: (e.target.value)})}/>
	  <input type='text' value={name.player2} placeholder={namePlayer2} onChange={(e)=>setName({...name, player2: (e.target.value)})}/>
	  <Button onClick={()=>props.getData(name)}> GO!</Button>
	  </>
  )
};

export default Input;