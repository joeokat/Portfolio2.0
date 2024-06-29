import React from 'react'
import { Link } from 'react-router-dom'
import PhoneMockup from "../assets/PhoneMockup.png"

export const Work = () => {
  return (
    <div className='mywork--container'>
      <h2>Why Hire Me</h2>
      <img src={PhoneMockup} alt="UI" />
      <p className='work--paragraph'>I happen to be a professional UX Engineer working with Fleet Labs Ghana Ltd. I'm a User-Centric UI Designer specialized in designing intuitive interfaces based on primary insights and informed decisions by critique stakeholders.</p>
        <div className='work--plan'>
          <Link to='/RecentWork' className="see--mywork">See My Work</Link>
          <Link to='/PricingPlan' className="pricing--plan">Pricing Plans</Link>
        </div>
    </div>
  )
}