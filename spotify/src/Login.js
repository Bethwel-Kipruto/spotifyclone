import React from 'react'
import './Login.css';
import { loginurl } from './spotify'

function Login() {
  return (
    <div className='login-page'>
        {/* LOGO */}
        <img src="https://rb.gy/km2xp" alt="SPOTIFY LOGO" />
        {/* LOGIN BUTTON */}
        <a href={ loginurl }>LOGIN WITH SPOTIFY</a>
        
    </div>
  )
}


export default Login;
