import React from 'react'

export const Services = () => {
  return (
    <div className='service--container'>
        <h2>My Services</h2>

        <div className="service--row">
        <div className='service--card'>
                <div className='service--name'>
                    <div>SVG</div>
                    <div className='service--title'>App UI Design</div>
                </div>
        
            <div>I design visually pleasing web applications that prioritize user engagement and brand consistency.</div>
        </div>

        <div className='service--card'>
                <div className='service--name'>
                    <div>SVG</div>
                    <div className='service--title'> Web UX Engineer</div>
                </div>
        
            <div>I develop high-performing websites by translating prototyped UI Designs into clean HTML & CSS code.</div>
        </div>
        </div>
    </div>
  )
}
