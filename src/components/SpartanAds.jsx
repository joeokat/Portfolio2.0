import React from 'react'
import message from "../assets/message.svg";

export const SpartanAds = () => {
  return (
    <div className="card">
        <div className="b--ads">Spartan Ads</div>
         <h2>Go from Zero to Booossu!</h2>
        <p>Develop skills you can apply right away, with curated e-learning courses designed by <span>BYOI</span> experts. <br /> Learn at your own pace and get certified.</p>

        <a className="join--button" href="https://t.me/+oCeVAiPJM482NjI0" rel="noreferrer" target="_blank">Join the Course Waitlist<img src={message} alt="" className="icon" /></a>
    </div>
  )
}
