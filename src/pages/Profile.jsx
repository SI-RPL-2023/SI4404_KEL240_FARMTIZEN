/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import Navbar from '../components/organisms/Navbar'

import '../css/profile.css'

const Profile = () => {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [street, setStreet] = useState('')
  const [address, setAddress] = useState()
  const [phone, setPhone] = useState('')
  const [role] = useState(localStorage.getItem('role'))
  const [gender, setGender] = useState('male')

  useEffect(() => {
    setEmail(localStorage.getItem('email'))
    setUserName(localStorage.getItem('user'))
    setStreet(localStorage.getItem('street'))
    setAddress(localStorage.getItem('address'))
    setPhone(localStorage.getItem('phone'))
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  const handleNameChange = (e) => {
    setUserName(localStorage.setItem('user', e.target.value))
  }

  const handleStreetChange = (e) => {
    setStreet(localStorage.setItem('street', e.target.value))
  }

  const handleAddressChange = (e) => {
    setAddress(localStorage.setItem('address', e.target.value))
  }

  const handlePhoneChange = (e) => {
    setPhone(localStorage.setItem('phone', e.target.value))
  }

  return (
    <>
      <Navbar />
      <div className='container '>
        <div className='row justify-content-end'>
        <div className='col-6 ml-auto'>
          <h1>My Account</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</h5>
          <p style={{ marginBottom: '75px' }} />
          <h4>Name</h4>
          <input className='form-control' value={userName} name='name' onChange={handleNameChange} />
          <br />
          <h4>Street</h4>
          <input className='form-control' value={street} onChange={handleStreetChange} />
          <br />
          <h4>Address</h4>
          <textarea className='form-control' value={address} onChange={handleAddressChange} />
          <br />
          <button className='btn btn-login' style={{ marginTop: '100px', width: '200px', height: '50px', backgroundColor: '#427A5B', border: 'none', color: 'white' }}>Update</button>
        </div>
        <div className='col-6 d-flex flex-column align-items-center justify-content-center'>
          <div className='box-container text-center'>
            <img src={require('../images/my profile.png')} alt='Profile' />
            <h1>{userName}</h1>
            <h3>{email}</h3>
            <br />
            <button className='btn btn-login' onClick={() => handleLogout()} style={{ width: '200px', height: '50px', backgroundColor: 'red', border: 'none', color: 'white' }}>Logout</button>
          </div>
          <div className='mt-4 text-a'>
            <h4>No Phone</h4>
            <input className='form-control' value={phone} name='name' onChange={handlePhoneChange} />
            <br />
            <h4>Role</h4>
            <input className='form-control' value={role} readOnly />
            <br />
            <h4>Gender</h4>
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="male">Laki-laki</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">Perempuan</label>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Profile
