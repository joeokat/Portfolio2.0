import React from 'react'
import { Link } from 'react-router-dom'
// import PhoneMockup from "../assets/PhoneMockup.png"

export const Work = () => {
  return (
    <div className='mywork--container'>
      <h2>Why Hire Me</h2>
      {/* <img src={PhoneMockup} alt="UI" /> */}
      <p className='work--paragraph'>
        🎯 I help businesses ship MVPs to market fast. I will design and develop a progressive web application for your business to reach 28k+ of the global marketplace. 
        I'm a User-Centric UI Designer specialized in designing and developing intuitive interfaces based on primary insights and informed decisions by critique stakeholders.
      </p>
        <div className='work--plan'>
          <Link to='/RecentWork' className="see--mywork">See My Work</Link>
          <Link to='/PricingPlan' className="pricing--plan">Pricing Plans</Link>
        </div>
    </div>
  )
}