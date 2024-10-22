import React from 'react'
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>
        <h1>Login Page</h1>
        <Link to='/dashboard'><button className='btn btn-primary'>Login</button></Link>
        <p>Don't have an Account? <Link to='/signup'> SignUp</Link></p>
    </div>
  )
}

export default Login