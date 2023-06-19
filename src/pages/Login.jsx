import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

const dataLogin = [
  {
    username: 'admin',
    email: 'admin@farmtizen.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    username: 'Alex',
    email: 'alex@gmail.com',
    password: 'alex123',
    role: 'user'
  }
]

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // check apakah email  dan password ada di data login
    const checkEmail = dataLogin.filter((data) => {
      return data.email === email
    })

    console.log(email)

    const checkPassword = dataLogin.filter((data) => {
      return data.password === password
    })

    if (checkEmail.length > 0 && checkPassword.length > 0) {
      // simpan di localstorage
      localStorage.setItem('role', checkEmail[0].role)
      localStorage.setItem('user', checkEmail[0].username)
      localStorage.setItem('email', checkEmail[0].email)

      // bila admin arahkan ke /dashboard
      if (checkEmail[0].role === 'admin') {
        window.location.href = '/dashboard'
      }
      // bila user arahkan ke /home
      if (checkEmail[0].role === 'user') {
        window.location.href = '/'
        localStorage.setItem('address', 'Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257')
        localStorage.setItem('street', 'Jl. Telekomunikasi. 1')
        localStorage.setItem('phone', '08123456')
      }
    }
  }

  useEffect(() => {
    // check apakah sudah login
    const role = localStorage.getItem('role')
    if (role === 'admin') {
      window.location.href = '/dashboard'
    }
    if (role === 'user') {
      window.location.href = '/profile'
    }
  })

  return (
        <div id="login">
            <div id="login-form" className='contiainer col-8'>
              <div style={{ marginBottom: '50px' }}>
                <h5><Link to="/">Home </Link>/ My  Account</h5>
                <h1>My Account</h1>
              </div>
              <div>
                <h1>Login</h1>
                <p>Don’t have accout ? Sign Up </p>
                <div className="mb-4">
                  <button className="btn btn-light btn-auth-sosmed" style={{ marginRight: '20px' }}><img src={require('../images/google.png')}/> Login with Google</button>
                  <button className="btn btn-light btn-auth-sosmed"><img src={require('../images/facebook.png')}/> Login with Facebook</button>
                </div>
                <div id="form-section">
                  <form>
                    <div className="form-group" >
                      <div className='email-input'>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <br/>
                        <input style={{ width: '50%' }} type="email" className="" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)} />
                      </div>
                      <div className='password-input'>
                        <label htmlFor='pasword'>Password</label>
                          <br/>
                          <input style={{ width: '50%' }} type="password" className="" id="password" onChange={(event) => setPassword(event.target.value)} />
                      </div>
                    </div>
                  </form>
                  <div className='row' style={{ width: '50%', marginTop: '30px' }}>
                    <div className='col-6'>
                      <div className='form-check' >
                        <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                        <label className='form-check-label' htmlFor='exampleCheck1'>Remember Me</label>
                      </div>
                      </div>
                      <div className='col-6 d-flex justify-content-end'>
                        <Link to='/forgot-password' className='forgot-password'>Forgot Password?</Link>
                      </div>
                      <div className='d-flex justify-content-end' style={{ padding: 0, marginTop: '30px' }}>
                        <button className='btn btn-login' style={{ width: '200px', height: '50px', backgroundColor: '#427A5B', border: 'none', color: 'white' }} onClick={() => handleLogin()}>Login</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Login
