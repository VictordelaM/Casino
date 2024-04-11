import {Routes, Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Games from './pages/Games'
import CustomWheel from './pages/CustomWheel'
import CashWheel from './pages/CashWheel'
import Slot from './pages/Slot'
import SlotCard from './pages/SlotCard'

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
        <Route path='/slot' element={<SlotCard/>}/>
        
      </Routes>
    </>
  )
}

export default App
