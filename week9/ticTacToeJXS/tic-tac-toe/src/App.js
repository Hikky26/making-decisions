import Square from './Square';
import './App.css';
import React, { useState } from 'react';


function App(props) {

  const [squares, setSquares] = useState(["","","","","","","","","",])
  const [player, setPlayer] = useState(true)

  const squareData = () =>{
    const handleClick = () => {
      setSquares
    }
    return(
      <Square
      squares={squares}
      setSquares = {setSquares}
      player = {player}
      setPlayer = {setPlayer}
      index = {index}
      squareVal = {val}
    />
    )
  }

  return (
    <div className="App">
      <div className='container'>
        {squares.map((val, index) => squareData(val,index))}
      </div>
    </div>
  );
}
export default App;
