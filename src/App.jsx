import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Login" element={<Login/>}/>
  </Routes>
    </>
  )
}

export default App
