import React from 'react'
import './stylings/login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  const login = async (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    console.log(formData)
    const response = await fetch('http://localhost:3000/user/login',{
        method: 'POST',
        credentials: "include",
        body: formData
    })
    const {status, token} = await response.json()
    localStorage.setItem("token", token)

    // authentifizierter request

    await fetch("http://localhost:3000/user/geheimnis", {
      headers: {"Authorization": `Bearer ${token}`}
    })

}
  return (
    <div className='box'>

      <form onSubmit={login}>
        <input type="text" name="username" id="inputUsername" placeholder='username'/>
        <input type="text" name="password" id="inputPassword" placeholder='password'/>
        <button>submit</button>
        <button onClick={()=>{localStorage.removeItem("token")}}>logout</button>
        <p id='register'>Don´t have an account? Register <span id='registerLink'><Link to='/register'>here</Link></span></p>
      </form >
    </div>
  )
}

export default Login
