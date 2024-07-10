import React from 'react'
import phone from "../assets/phone.png";
import code from "../assets/code.png";

export const Services = () => {
  return (
    <div className='service--container'>
        <h2>My Services 🚀</h2>

        <div className="service--row">
        <div className='service--card'>
                <div className='service--name'>
                    <div className='svg--icon'><img src={phone} alt="" /></div>
                    <div className='service--app'>UX Designer</div>
                </div>
        
            <div className='card--content'>I design visually pleasing web applications that prioritize users engagement and brand consistency.</div>
        </div>

        <div className='service--card'>
                <div className='service--name'>
                    <div className='svg--icon'><img src={code} alt="" /></div>
                    <div className='service--web'> Web App Developer</div>
                </div>
        
            <div className='card--content'>I develop high-performing applications, converting Figma UI Designs into clean HTML and CSS codes.</div>
        </div>
        </div>
    </div>
  )
}
