const TeamCard =({char}) => {
   
   
    let imgPin = char.sprites.other["official-artwork"].front_default
    let types = char.types.map((t,i) => {
        return <h5 className={t.type.name} key ={i} > {t.type.name}</h5>
    })

    let stats = char.stats.map(s,i) => {
        return <p key={i}
    }

    //used to using dot notations but what about bracket notations
    console.log(imgPin)
    return (
        <div className="card">
            <img src={imgPin}/>
        </div>
    )
}

export default TeamCard