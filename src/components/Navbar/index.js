import React from 'react';
import {Link} from "react-router-dom"
import "./style.css"

const Navbar = (props) => {
  return (
    <div className="Navbar">
        <Link to="/">Home</Link>
        {props.isLoggedIn?<Link to={`/profile/${props.userId}`}>My Profile</Link>:<Link to="/login">Login</Link>}
        {props.isLoggedIn?<button onClick={props.logout}>Logout</button>:null}
    </div>
  )
}

export default Navbar