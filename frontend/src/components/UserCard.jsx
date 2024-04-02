import React, { useContext } from 'react'
import { mainContext } from '../context/MainProvider'

const UserCard = () => {
    const {balance, username, email, emailVerified} = useContext(mainContext)
    console.log(balance, username, email, emailVerified)
  return (
    <div>
        <p id="username">{username}</p>
        <p id="email">{email}</p>
        <p id="balance">{balance}</p>
    </div>
  )
}

export default UserCard
