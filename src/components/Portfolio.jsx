import React from 'react'
import web from "../assets/web.svg"
import cv from "../assets/cv.jpg";
import odx from "../assets/odx.png";

export const Portfolio = () => {
  return (
    <div className='portfolio--container'>
      <h2 className='recent--work'>Recent Work</h2>
        
        <div className="portfolio--row">
            <div className='portfolio--card'>
                <img src={odx} alt="" />
                <p className='title'>Soccer Tips App</p>
                <p> Web Technologies: Svelte.js</p>
                <a className='view--BTN' href="https://odx.vercel.app" target='_blank' rel='noreferrer'> View Live Project
                <img src={web} alt="" />
                </a>
            </div>

            <div className='portfolio--card'>
                <img src={cv} alt="" />
                <p className='title'>Portfolio Website 2.0</p>
                <p> Web Technologies: HTML + CSS</p>
                <a className='view--BTN' href="https://joshuaofosu.vercel.app/" target='_blank' rel='noreferrer'> View Live Project
                <img src={web} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}
