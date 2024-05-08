import React from 'react'
import PhoneMockup from "../assets/PhoneMockup.png"

export const SeeMyWork = () => {
  return (
    <div className='mywork--container'>
        <h2>Why Hire Me</h2>
        <img src={PhoneMockup} alt="UI" />
        <p className='work--paragraph'>I happen to be a very good UX Engineer working with Fleet Labs Ghana Ltd. I'm a User-Centric UI Designer specialized in designing intuitive interfaces based on primary insights and informed decisions by critique stakeholders.</p>
        <div className='cta-btn'>
            <a href='/' className="pricing--plan">Pricing Plans</a>
            <a href='/' className="see--mywork">See my work</a>
        </div>
    </div>
  )
}
