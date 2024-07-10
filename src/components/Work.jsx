import React from 'react'
import { Link } from 'react-router-dom'
// import PhoneMockup from "../assets/PhoneMockup.png"

export const Work = () => {
  return (
    <div className='mywork--container'>
      <h2 className='hire--me'>Why Choose Me 🎯</h2>
      <p className='work--paragraph'>
      I design and develop lightning-fast Progressive Web Apps that reach 
      thousands of users, helping businesses thrive in the global marketplace. 
      </p>
        <div className='work--plan'>
          <Link to='/RecentWork' className="see--mywork">See My Work</Link>
          <Link to='/PricingPlan' className="pricing--plan">Pricing Plans</Link>
        </div>
    </div>
  )
}
