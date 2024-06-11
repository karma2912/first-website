import React from 'react'

const FifthPageComponent = (props) => {
  return (
    <>
    <div className='fifth-component'>
        <img src={props.image} className='interior'></img>
        <div className='fifth-second-half'>
            <img src={props.profile} className='profile-pic'></img>
            <div className='name'>
              <p className='pro-name'>{props.name}</p>
              <p className='pro-loc'>{props.location}</p>
            </div>
            </div>
        <div className='random-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem iure nemo ipsa, architecto culpa in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit aut inventore vero tenetur sunt </div>
    </div>
    </>
  )
}

export default FifthPageComponent
