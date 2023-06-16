import TeamCard from '../components/TeamCard'

const TeamScreen = ({team}) => {
    let teamDisplay = team.map((char, index) => {
        return <TeamCard char={char} key={index}/>
    })

    return (
        <div>
            <h1>My Team</h1>
            {teamDisplay}
        </div>
    )
}

export default TeamScreen