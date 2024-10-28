import React from 'react'
import { Link } from 'react-router-dom';
import { BiBasketball } from "react-icons/bi";

function Login() {
  return (
    <div className='login'>
        <img src='/images/men.jpg' alt="" />
        <h1>Login Page</h1>
        <Link to='/dashboard'><button className='btn btn-primary'><BiBasketball/>Login</button></Link>
        <p>Don't have an Account? <Link to='/signup'> SignUp</Link></p>
    </div>
  )
}

export default Login