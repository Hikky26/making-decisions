import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(true)

   const url = 'https://socialmtn.devmountain.com'

   const authCtx = useContext(AuthContext)
 
   const submitHandler = e => {
        e.preventDefault()

        const body = {
            username,
            password
        }

        axios
            .post(register ? `${url}/register` : `${url}/login`, body)
            .then(({data}) => {
                console.log(data)
                authCtx.login(data.token, data.expTime, data.userId)
            })
            .catch(err => {
                setPassword('')
                setUsername('')
            })
        
        console.log('submitHandler called')
   }

   const clickHandle = () => {
    setRegister(!register)
   }
 
   return (
       <main>
           <h1>Welcome!</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
               <input
                    className='form-input'
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={e=> setUsername(e.target.value)}
                />
               <input
                    className='form-input'
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />
               <button className='form-btn'>
                    {register ? 'Sign Up' : 'Login'}
               </button>
           </form>
           <button className='form-btn' onClick={clickHandle}>
                Need to {register ? 'Login' : 'Sign Up'}?
            </button>
       </main>
   )
}
 
export default Auth