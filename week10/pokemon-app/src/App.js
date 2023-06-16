import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import TeamScreen from './screens/TeamScreen';
import DexScreen from './screens/DexScreen';
import axios from 'axios';

function App() {
  const [toggle, setToggle] = useState('')
  const[team, setTeam] = useState([])


  const addToTeam = (newPokemonURL) => {
    axios.get(newPokemonURL)
    .then((res) => {
      setTeam([...team, res.data])
    })
  }


  return (
    <div className="App">
      <Header />
      <Buttons setToggle={setToggle}/>
      {toggle ? <TeamScreen/> : <DexScreen addToTeam={addToTeam}/>}
      {addToTeam}
    </div>
  );
}

export default App;
