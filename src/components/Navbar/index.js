import React from 'react';
import {Link} from "react-router-dom"
import "./style.css"

const Navbar = () => {
  return (
    <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* TODO: when logged in, hide login link */}
        {/* TODO: when logged in, add link to your profile page and logout button*/}
    </div>
  )
}

export default Navbar