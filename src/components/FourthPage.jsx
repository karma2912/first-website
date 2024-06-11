import React from 'react';
import FourthPageComponent from './FourthPageComponent';
import './FourthPage.css'
import villa1 from "./villa1.jpg"
import villa2 from "./villa2.jpg"
import villa3 from "./villa3.jpg"
const FourthPage = () => {
  return (
    <>
    <section className='section-fourth'>
        <div className='residences'>Our Popular Residences</div>
        <div className='upper-cards'>
            <div className='cards'>
                <FourthPageComponent location="San Fransisco, California" bhk="4 Bedrooms" area="2500 sq ft" price="2,500,000" image={villa1}/> 
            </div>
            <div className='cards'>
                <FourthPageComponent location="Beverly Hills, California" bhk="5 Bedrooms" area="3600 sq ft" price="4,500,000" image={villa2}/> 
            </div>
            <div className='cards'>
                <FourthPageComponent location="Polo Alto, California" bhk="3 Bedrooms" area="1700 sq ft" price="1,900,000" image={villa3}/> 
            </div>
        </div>
    </section>
    </>
  )
}

export default FourthPage
