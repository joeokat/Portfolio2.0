import React from 'react'
import message from "../assets/message.svg";

export const SpartanAds = () => {
  return (
    <div className="card">
        <div className="b--ads">Spartan Ads</div>
         <h2>BYOI E-Learning</h2>
        <p>I share basic tips to build Web Applications with HTML and CSS in 6 just weeks.</p>

        <a className="join--button" href="https://t.me/+oCeVAiPJM482NjI0" rel="noreferrer" target="_blank">Join the Waitlist<img src={message} alt="" className="icon" /></a>
    </div>
  )
}
