import React from 'react'


export const SpartanAds = () => {
  return (
    <div className="card--container">
      <div className="card">
        <div className="b--ads"> Ads by BYOI</div>
         <h2> Build Your Own App </h2>
        <p> 
        {/* Learn to Build and Monetize iOS and Android Apps with just HTML and CSS. 
          Get my FULL GUIDE teaching you how to make ¢3,500 in a month+. */}
          Everyone should own a mobile or web app that makes at least ¢1.8k/month.
          Mine made ¢1.6k last month. <br />

          Get my FULL GUIDE teaching how you could do same.
        </p>

        <a 
        className="join--button" 
        href="https://fb.com/buildyourownidea" 
        rel="noreferrer" 
        target="_blank"> 
          Get it for only ¢300 
        </a>
      </div>
    </div>
  )
}
