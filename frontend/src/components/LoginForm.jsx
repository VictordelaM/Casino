import React, { useContext } from 'react'
import './stylings/login.css'
import { Link } from 'react-router-dom'
import { mainContext } from '../context/MainProvider'


const Login = () => {
  const {username,setUsername} = useContext(mainContext)
  const {user,setUser} = useContext(mainContext)
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
  const login = async (event) => {
    event.preventDefault()
    const form = event.target
    console.log(form)
    const formData = new FormData(form)
    console.log(formData)
    const response = await fetch('http://localhost:3000/user/login',{
        method: 'POST',
        // credentials: "include",
        body: formData
    })
    console.log(response)
    const {status, token} = await response.json()
    console.log(token)
    localStorage.setItem("token", token)

    // authentifizierter request

    await fetch("http://localhost:3000/user/geheimnis", {
      headers: {"Authorization": `Bearer ${token}`}
    })

}
const logout =()=>{
  localStorage.removeItem("token")
  setUser(null)
  setUsername(null)
}
  return (
    <div className='box'>

      <form onSubmit={login}>
        <input type="text" name="username" id="inputUsername" placeholder='username'/>
        <input type="text" name="password" id="inputPassword" placeholder='password'/>
        <button>submit</button>
        <button onClick={logout}>logout</button>
        <p id='register'>Don´t have an account? Register <span id='registerLink'><Link to='/register'>here</Link></span></p>
      </form >
    </div>
  )
}

export default Login
