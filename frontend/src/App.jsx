import {Routes, Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Games from './pages/games'
import CustomWheel from './pages/CustomWheel'
import CashWheel from './pages/CashWheel'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/customWheel' element={<CustomWheel/>}/>
        <Route path='/cashWheel' element={<CashWheel/>}/>
      </Routes>
    </>
  )
}

export default App
