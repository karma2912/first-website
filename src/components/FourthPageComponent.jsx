import React from 'react'

const FourthPageComponent = (props) => {
  return (
    <> 
       <div className='inner-cards'>
          <img className='villas' src={props.image}></img>
          <div className='second-part'><i class="fa-solid fa-location-dot"></i>{props.location}</div>
          <div className='info'>
            <div className='room'><i class="fa-solid fa-bed"></i>{props.bhk}</div>
            <div className='area'><i class="fa-solid fa-chart-area"></i>{props.area}</div>
          </div>
          <div className='third-part'>
            <button className='fourth-button'>Sign up</button>
            <div className='price'>${props.price}</div>
          </div>
        </div>
     </>
  )
}

export default FourthPageComponent
