import Square from './Square';
import './App.css';
import React, { useState } from 'react';

const calculateWinner = (arr) => {
  let lines = [
    //dont feel like typing this out again using 0, so i will leave as is and use i+1
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7],
    [1,5,9]
  ]
  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i]
    if(
      arr[a] && 
      arr[a] === arr[b]  &&
      arr[b] === arr[c] 
    ){
      return `${arr[a]} won!`
    }
  }
  return "Who will win?"
}

function App(props) {

  const [squares, setSquares] = useState(["","","","","","","","","",])
  const [player, setPlayer] = useState(true)
  const handleClick = () => {
    setSquares(["","","","","","","","",""])
    setPlayer(true)
  }

  const squareData = () =>{
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
        <button onClick={handleClick}>Reset</button>
      </div>
      <span>
        {calculateWinner(squares)}
      </span>
    </div>
  );
}
export default App;
