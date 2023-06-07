//you can call specific methods byt just using curly brackets and such. 
const Buttons = ({setToggle}) => {
    const goToTeam = () => setToggle(true)
    const goToDex = () => setToggle(false)
    return (
        <div className="row-container"> 
            <button onclick={goToDex}>Dex</button>
            <button onclick={goToTeam}>Team</button>
        </div>
    )
}

export default Buttons