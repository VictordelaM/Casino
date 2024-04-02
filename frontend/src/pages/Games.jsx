import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Games = () => {
  return (
    <>
    <Nav/>
    <div className='gamesList'>
        <Link to='/cashWheel'>Wheel of Cash</Link>
        <Link to= '/customWheel'>Wheel of Custom</Link>
    </div>
    </>
  )
}

export default Games
