import React from 'react'
import { useNavigate } from "react-router-dom"
import "./index.css"

function Header() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    sessionStorage.removeItem("loggedIn")
   navigate("/login")
    
  }
  

  return (
      <nav className='navBarContainer'>
          <button className='btn logout' onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Header