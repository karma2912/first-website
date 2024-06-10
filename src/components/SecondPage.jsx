import React from 'react'
import './SecondPage.css'
import house from "./house.jpg"
const SecondPage = () => {
  return (
    <>
    <section id="second-section">
        <div className='second-image'>
            <img src={house}></img>
        </div>
        <div className='second-text'>
        <span className='bolder-text-second'>We Help You To Find<br/>
           Your Dream Home</span><br/>
            <br/>
            <p>
            Form ready cottages to luxurious estates, our<br/> 
            dedicated team guides you through every steps of the<br/>
            journey ensuring your dream home becomes a reality 
            </p>
            <br/>
            <br/>
            <div className='second-number'>
            <span className='bolder-text-second'>
              8K+<br/>
              <p>
              House Available
              </p>
            </span>
            <span className='bolder-text-second'>
              6K+<br/>
              <p>
              House Sold
              </p>
            </span>
            <span className='bolder-text-second'>
              2K+<br/>
              <p> 
              Trusted Agents
              </p>
            </span>
            </div>
        </div>
    </section>
    </>
  )
}

export default SecondPage
