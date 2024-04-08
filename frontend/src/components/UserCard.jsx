import React, { useContext, useEffect, useState} from 'react'
import { mainContext } from '../context/MainProvider'

const UserCard = () => {  
  const [user, setUser] = useState([])
  // const [username, setUsername] = useState("")
  const username= 'sisi'
  let verifiedSign = ''

  useEffect(()=>{
    fetch(import.meta.env.VITE_BACKEND_URL+'/user/'+username)
    .then((response)=>response.json())
    .then((json)=>{
      setUser(json)
    })
  })
  if(user.emailVerified==true){
    verifiedSign = '✅'
  }else{verifiedSign = '❌'}
  return (
    <div>
        <p id="username">{user.username}</p>
        <p id="email">{user.email}  {verifiedSign}</p>
        <p id="balance">{user.balance}</p>
    </div>
  )
}

export default UserCard
