import React, {useState} from 'react'
import axios from 'axios'

const Header = () => {
    const[name, setName] = useState('')

    function handleClick(){
        axios.get('http://localhost:5050/api/name')
            .then((res) =>{
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


  return (
    <div>
        <button onClick={handleClick}>See Name</button>
        <h1>{name}</h1>
    </div>
  )
}

export default Header