import React, {useState,useEffect} from 'react'
import style from './app.module.css'
import Modal from "./components/Modal/Modal";
import DisplayGame from "./components/DislpayGame/DisplayGame";
import Players from "./components/Players/Players";
import Input from "./components/Input/Input";

function App() {

  const [name, setName] = useState({
    player1: 'Unknown1',
    player2: 'Unknown2'
  });
  const [data, setData] = useState({
    winners: {
      winner: undefined,
      index: []
    },
    move: name.player1,
    cells: Array(9).fill(null)
  });
  const [modalActive, setModalActive] = useState(true);

  useEffect(()=>{
    setData({...data, move: name.player1})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[modalActive]);

  return (
      <div className={style.container}>
         <Modal
          active={modalActive} setActive={setModalActive}>
          <h3>Enter names of 2 Players :</h3>
          <Input
            getData={name => {
              setName(name);
              setModalActive(false)}}
            setModal = {setModalActive}
            namePlayer1={'First player'}
            namePlayer2={'Second player'} />
        </Modal>
        <Players data={data} name={name}/>
        <DisplayGame data={data} setData={setData} name={name}/>
      </div>
  );
}

export default App;
