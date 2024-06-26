import React from 'react';
import myPhoto from "./houselogo1.jpg"

const menuHandler =()=>{
  console.log("Hii i am from inside")
}
const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="logo">
           <img src={myPhoto} alt="logo"/>
        </div>
        <div className="options">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="extra">
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
           <i className="fa-solid fa-bars" id='menu' onClick={menuHandler}></i>
            </div>
            <button>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
