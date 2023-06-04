import './App.css';
import React, { useState } from 'react';
import Square from './Square';


const calculateWinner = (squares) => {
  let lines = [
    //dont feel like typing this out again using 0, so i will leave as is and use i+1
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i]
    if(
      squares[a] && 
      squares[a] === squares[b]  &&
      squares[b] === squares[c] 
    ){
      return `${squares[a]} won!`
    }
  }
  return "Who will win?"
}


function App() {
  
  const [squares, setSquares] = useState(["","","","","","","","","",])
  const [player, setPlayer] = useState(true)
  const handleClick = () => {
    setSquares(["","","","","","","","",""])
    setPlayer(true)
  }

  return (
    <div className="App">
        <span>
          {calculateWinner(squares)}
        </span>
      <div className='container'>
        {squares.map((val, index) => {
          return(
            <Square
            key = {index}
            squares={squares}
            setSquares = {setSquares}
            player = {player}
            setPlayer = {setPlayer}
            index = {index}
            squareVal = {val}
            />
            )
          })
        }
      </div>
        <button onClick={handleClick}>Reset</button>
    </div>
  );
}
export default App;
