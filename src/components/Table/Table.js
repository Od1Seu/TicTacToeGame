import React  from 'react';
import styles from './table.module.css'
import Cross from "../svgs/Cross";
import Circle from "../svgs/Circle";
const Table = (props) => {

  const renderSvg = svg =>{
    if(svg === props.name.player1){
      return <Cross  size={70}/>
	} else if(svg === props.name.player2){
      return <Circle size={70}/>
	} else return null
  };
	const cell = props.cells.map((field, index) => {
	const isWinningStyle = props.winningIndex && props.winningIndex.includes(index);
	  return (
		<div
		  className={isWinningStyle ? styles.winner : null}
		  key={index}
		  onClick={() => props.setCells(index)}>
		  {renderSvg(field)}
		</div>
	  )
	});

  return (
	<div className={styles.container}>
	  {cell}
	</div>
  );
};

export default Table;