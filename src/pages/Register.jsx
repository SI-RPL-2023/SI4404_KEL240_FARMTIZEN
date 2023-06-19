import { Link } from 'react-router-dom'
import '../css/register.css'

const Register = () => {
  const handleRegister = () => {
    window.location.href = '/login'
  }

  return (
    <div id="register">
        <div id="register-form" className='contiainer col-8'>
          <div style={{ marginBottom: '20px' }}>
            <h5><Link to="/">Home </Link>/ My  Account</h5>
            <h1>My Account</h1>
          </div>
          <div>
            <h1>Register</h1>
            <p>Don’t have accout ? Sign Up </p>
            <div className="mb-4">
              <button className="btn btn-light btn-auth-sosmed" style={{ marginRight: '20px' }}><img src={require('../images/google.png')}/> Register with Google</button>
              <button className="btn btn-light btn-auth-sosmed"><img src={require('../images/facebook.png')}/> Register with Facebook</button>
            </div>
            <div id="form-section" style={{ width: '500px' }}>
            <form>
                <div className="form-group">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%' }}>
                    <div className='first-name-input'>
                      <label htmlFor="firstName">Nama Depan</label>
                      <br/>
                      <input style={{ width: '100%' }} type="text" id="firstName" />
                    </div>
                    <div className='last-name-input'>
                      <label htmlFor='lastName'>Nama Belakang</label>
                      <br/>
                      <input style={{ width: '100%' }} type='text' id='lastName' />
                    </div>
                  </div>
                  <br/>
                  <div className='email-input'>
                    <label htmlFor="exampleInputEmail1">Alamat Email</label>
                    <br/>
                    <input style={{ width: '100%' }} type="email" className="" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <br/>
                  <div className='password-input'>
                    <label htmlFor='password'>Password</label>
                    <br/>
                    <input style={{ width: '100%' }} type='password' className='' id='password' />
                  </div>
                </div>
              </form>
              <div className='row' style={{ marginTop: '30px' }}>
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
                    <button onClick={() => handleRegister()} className='btn btn-Register' style={{ width: '200px', height: '50px', backgroundColor: '#427A5B', border: 'none', color: 'white' }}>Register</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register
