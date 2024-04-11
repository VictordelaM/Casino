import React, { useContext, useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import Nav from '../components/Nav'
import UserCard from '../components/UserCard'
import { parseJwt } from '../components/functions/parseJwt'
import { mainContext } from '../context/MainProvider'

const Login = () => {
const {user , setUser} = useContext(mainContext)
  return (
    <div>
      <Nav/>
      <LoginForm/>
      <UserCard/>
    </div>
  )
}

export default Login
