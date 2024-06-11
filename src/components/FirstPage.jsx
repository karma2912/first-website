import React from 'react'
import './FirstPage.css'
import house from "./house4.webp"
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
    <div className='upper-first-data'>
    <div className='first-data'>
      <div className='lower-first-data'>
      <div className='location'>location<i className="fa-solid fa-location-dot"></i></div>
      <div className='type'>Type<i className="fa-solid fa-house"></i></div>
      </div>
      <div className='lower-first-data-second'>
      <div className='range'>Price Range<i className="fa-solid fa-indian-rupee-sign"></i></div>
      <button>Sign Up</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default FirstPage
