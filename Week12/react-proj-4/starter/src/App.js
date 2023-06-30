import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useContext } from 'react'
import AuthContext from './store/authContext'

import Header from './components/Header'
import Home from './components/Home'
import Auth from './components/Auth'
import Form from './components/Form'
import Profile from './components/Profile'

// console.log('error')

const App = () => {

  const authCtx = useContext(AuthContext)


  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={ authCtx.logintoken ? <Navigate to='/' /> : <Auth/>}/>
        <Route path='/form' element={ authCtx.logintoken ? <Navigate to='/' /> : <Form/>}/>
        <Route path='/profile' element={ authCtx.logintoken ? <Navigate to='/' /> : <Profile/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App
