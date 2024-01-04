import React from "react";
import message from "../assets/message.svg";

export default function Info() {
  return (
    <div className="info--container">
      <div className="about--me">
        <h3>About</h3>
        <p>
          Hello! I am Joshua, founder and CEO of Fleet Labs Ghana and BYOI.
        </p>
        <p>
          I am building affordable Web Apps for small and medium size businesses from now to July 2024. Don't miss out on this rare opportunity to grow your business.
        </p>
      </div>

      <div className="card">
        <div className="b--ads">ads</div>
        <h2>Go from Zero to Booossu!</h2>
        <p>Develop skills you can apply right away, with curated e-learning courses designed by <span>BYOI</span> experts. <br /> Learn at your own pace and get certified.</p>

        <a className="join--button" href="https://t.me/+oCeVAiPJM482NjI0" rel="noreferrer" target="_blank">Join the Course Waitlist<img src={message} alt="" className="icon" /></a>
      </div>

      <div className="my--skills">
         <h3>Skills</h3>
         <p>Branding | UI/UX Design | Web Design | App Design | Web Development | Figma | Adobe XD | Coding [ HTML, CSS, Python ] | Project Management | Tech Consultancy.</p> 
      </div>
    </div>
  );
}
