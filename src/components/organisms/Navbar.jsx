import { Link } from 'react-router-dom'
import '../../css/navbar.css'
import logo from '../../images/logo.png'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Navbar = ({ home }) => {
  const navbarStyle = {
    backgroundColor: home ? 'transparent' : '#2F483B'
  }

  const [isLogin, setIsLogin] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const role = localStorage.getItem('role')
    setUserName(localStorage.getItem('user'))
    if (role) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  })

  return (
        <div style={navbarStyle}>
            <nav id="navbar" className="navbar">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} className="img-fluid" alt="logo"/>
                        </Link>
                    </div>
                    <div className="menu position-absolute top-50 start-50 translate-middle">
                        <ul className="d-flex justify-content-center" style={{ fontSize: '25px' }}>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/courses">Kursus</Link>
                            </li>
                            <li>
                                <Link to="/comunity">Komunitas</Link>
                            </li>
                            <li>
                                <Link to="/recomended">Rekomendasi</Link>
                            </li>
                            <li>
                                <Link to="/konsultan">Konsultan</Link>
                            </li>
                        </ul>
                    </div>

                    {/* user profile in right corner */}
                    {
                        isLogin
                          ? (
                            <Link to="/profile"><h4>Halo, {userName}</h4></Link>
                            )
                          : (<div className="user-profile d-flex align-items-center">
                        <div className="login-register">
                            <Link to="/login">
                                Login
                            </Link>
                            <span> | </span>
                            <Link to="/register">
                                Register
                            </Link>
                        </div>
                    </div>)
                    }
                </div>
            </nav>
        </div>
  )
}

Navbar.propTypes = {
  home: PropTypes.bool.isRequired // Menambahkan validasi prop-types untuk properti 'home'
}

export default Navbar
