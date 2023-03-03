import React from 'react';
import {Link} from "react-router-dom"
import "./style.css"

const Navbar = (props) => {
  return (
    <div className="Navbar">
        <Link to="/">Home</Link>
        {props.isLoggedIn?<Link to={`/profile/${props.userId}`}>My Profile</Link>:<Link to="/login">Login</Link>}
        {props.isLoggedIn?<button onClick={props.logout}>Logout</button>:null}
        {/* TODO: when logged in, hide login link */}
        {/* TODO: when logged in, add link to your profile page and logout button*/}
    </div>
  )
}

export default Navbar