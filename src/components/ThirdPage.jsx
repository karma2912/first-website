import React from 'react'
import "./ThirdPage.css"
const ThirdPage = () => {
  return (
    <>
    <section className='section-third'>
        <div className='third-upper-text'>
        <div className='third-text'>
            Why Choose Us<br/>
            <p className='third-para'>
               Enhancing Your Home Buying Experience with Expertise,Integrity<br/>
               and Unmatched Personalised Service
               </p>
        </div>
        <div className='third-data'>
            <div className='guidance'>
            <i class="fa-solid fa-street-view"></i>
                <p className='inner-guidance'>Expert Guidance</p><br/>
                <p className='inner-guidance-para'>A beacon of knowledge lighting the way through life's maze, offering clarity
                </p>
            </div>
            <div className='service'>
            <i class="fa-solid fa-user"></i>
                <p className='inner-guidance'>Personalised Services</p><br/>
                <p className='inner-guidance-para'>Tailored experiences, unique solutions, individual attention, customized offerings, specialized assistance, one-on-one support.
                </p>
            </div>
            <div className='process'>
            <i class="fa-solid fa-file"></i>
                <p className='inner-guidance'>Transparent Process</p><br/>
                <p className='inner-guidance-para'>Tailored experiences with clear communication, transparent procedures, personalized recommendations, open process.
                </p>
            </div>
            <div className='support'>
            <i class="fa-solid fa-handshake"></i>
                <p className='inner-guidance'>Exceptional Support</p><br/>
                <p className='inner-guidance-para'>Tailored experiences with transparent procedures, customized solutions, and personalized recommendations
                </p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default ThirdPage
