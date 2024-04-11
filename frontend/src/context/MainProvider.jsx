import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [user, setUser] = useState()
    const [balance, setBalance] = useState(0)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [emailVerified, setEmailVerified] = useState(false)
    const [token, setToken] = useState(null)
    // useEffect(()=>{
    //     const getBalance = async ()=>{
    //       const name = "sisi"
    //       const response = await fetch(`http://localhost:3000/user/${name}`,{
    //         method: 'GET',
    //       })
    //       setUser(response.json())
    //       // console.log('resp',response.json())
    //     }
    //     getBalance()
    //     //   user.then(data=>{
    //     //   const name = data.username
    //     //   console.log('bal',name)
    //     // })
    // },[])
    // console.log('user', user)


  //   const [promise, object] = response.json()
  // setBalance(object.balance)
  // setUsername(object.username)
  // setEmail(object.email)
  // setEmailVerified(object.emailVerified)
  return (
<>
        <mainContext.Provider value={{user, setUser,balance, username, setUsername, email, emailVerified}}>
            {children}
        </mainContext.Provider>
    </> 
  )
}

export default MainProvider
