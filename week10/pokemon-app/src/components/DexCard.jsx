const DexCard = ({pokemon, addToTeam}) => {
    return (
        <div className="card">
            <h4>{pokemon.name}</h4>
            <button onClick={() => addToTeam(pokemon.url)}>Add</button>
        </div>
    )
}

export default DexCard