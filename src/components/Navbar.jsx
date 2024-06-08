import React from 'react';
import myPhoto from "./houselogo1.jpg"
const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="logo">
           <img src={myPhoto} alt="logo"/>
        </div>
        <div className="options">
            <ul>
                <li><a>Home</a></li>
                <li><a>Service</a></li>
                <li><a>Agents</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="extra">
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-bars" id='menu'></i>
            </div>
            <button>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
