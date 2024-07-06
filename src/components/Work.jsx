import React from 'react'
import { Link } from 'react-router-dom'
// import PhoneMockup from "../assets/PhoneMockup.png"

export const Work = () => {
  return (
    <div className='mywork--container'>
      <h2 className='hire--me'>🎯 Why Hire Me</h2>
      <p className='work--paragraph'>
        I design and develop (PWA) Progressive Web Apps for businesses 
        that ships to market fast, reaching 28k+ users of the global marketplace. 
      </p>
        <div className='work--plan'>
          <Link to='/RecentWork' className="see--mywork">See My Work</Link>
          <Link to='/PricingPlan' className="pricing--plan">Pricing Plans</Link>
        </div>
    </div>
  )
}