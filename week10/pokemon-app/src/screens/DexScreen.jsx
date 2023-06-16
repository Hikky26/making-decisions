import { useEffect, useState } from "react"
import axios from "axios";
import DexCard from "../components/DexCard";




const DexScreen = ({addToTeam}) => {

    const [allPokemon, setPokemon] = useState([])

    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then((res) => {
            console.log(res.data.results)
            setPokemon(res.data.results)
        })
        console.log("Render")
    }, []);
   
   const pokeDexDisplay = allPokemon.map((pokemon, index) => {
        return <DexCard pokemon={pokemon} addToTeam={addToTeam} key={`${pokemon.name} + ${index}`}/>
   })
    
    return (
        <div>
            <h1>DEX Screen</h1>
            {pokeDexDisplay}
        </div>
    )
}

export default DexScreen