import React from 'react'
import './FirstPage.css'
import house from "./house3.webp"
const FirstPage = () => {
  return (
    <>
    <section>
        <div className='image-text'>
            <span className='bolder-text'>Find Your<br/>
            Dream Home</span><br/>
            <br/>
            <p>
            Explore our exorted selection of exquiste <br/> 
            properties perfectly taliored to your <br/>
            unique dream house vision 
            </p>
            <br/>
            <br/>
            <br/>
            <button>Sign Up</button>
         </div>
        <div className='image'>
            <img src={house}></img>
        </div>
    </section>
    </>
  )
}

export default FirstPage
