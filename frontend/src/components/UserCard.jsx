import React, { useContext, useEffect, useState} from 'react'
import { mainContext } from '../context/MainProvider'
import { parseJwt } from './functions/parseJwt'

const UserCard = () => {  
  const {username,setUsername} = useContext(mainContext)
  const {user, setUser} = useContext(mainContext)
  // const [username, setUsername] = useState("")
  let verifiedSign = ''


  useEffect(()=>{
    const token = parseJwt()
    setUsername(token.payload.username)
    },[])

  
  // const token = parseJwt()
  // console.log(token)


  // setUsername(token)
  
  useEffect(()=>{
    fetch(import.meta.env.VITE_BACKEND_URL+'/user/'+username)
    .then((response)=>response.json())
    .then((json)=>{
      setUser(json)
    },[])
  })
  if (!user) {
    return <div>Lade...</div>
  }
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
