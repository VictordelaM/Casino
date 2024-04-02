import React from 'react'
import './stylings/login.css'
import { Link } from 'react-router-dom'

const Register = () => {
    const register = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        fetch('http://localhost:3000/user/register',{
            method: 'POST',
            body: formData
        })
    }
  return (
    <div className='box'>
        <form onSubmit={register}>
            <input type="text" name="username" id="inputUsername" placeholder='name'/>
            <input type="text" name="password" id="inputPassword" placeholder='password'/>
            <input type="text" name="email" id="inputEmail" placeholder='email' />
            <button>submit</button>
            <p id='register'>Already have an account? Login <span id='loginLink'><Link to='/login'>here</Link></span></p>
        </form>
    </div>
  )
}

export default Register
