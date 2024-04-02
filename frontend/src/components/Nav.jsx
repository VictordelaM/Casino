import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './stylings/nav.css'
// import { mainContext } from '../context/MainProvider' 
const Nav = () => {
  // const {balance ,setBalance} = useContext(mainContext)

  return (
    <div>
      <nav>
      <Link to='/' className='navText'>Home</Link>
      <Link to='/games' className='navText'>Games</Link>
      <Link to='/login' className='navText'>Login</Link>
      <Link to='/register' className='navText'>Register</Link>
      {/* <div id='balance' className='navText'>
        <p>Balance: </p> 
        <p>{balance}</p>
      </div> */}
      </nav>
    </div>
  )
}

export default Nav
