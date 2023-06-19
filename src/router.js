import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Courses from './pages/Courses'
import Comunity from './pages/Comunity'
import Recommended from './pages/Recommended'
import Konsultan from './pages/Konsultan'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Blog from './pages/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/courses',
        element: <Courses/>
      },
      {
        path: '/comunity',
        element: <Comunity/>
      },
      {
        path: '/recomended',
        element: <Recommended/>
      },
      {
        path: '/konsultan',
        element: <Konsultan/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ]
  }
])

export default router
