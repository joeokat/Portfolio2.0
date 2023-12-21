import React from "react";

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
        <h2>Get real world skills! <br /> Go from Zero to Boosu!</h2>
        <p className="b--ads">Are you feeling stuck or overwhelmed in your career journey? Don't worry, <span>BYOI</span> got your back! Together, we'll work to level up your skills, increase your earning potential, and build a brighter future.</p>
        <a className="join--button" href="https://wa.me/233261430256" rel="noreferrer" target="_blank">Join us today</a>
      </div>

      {/* <div className="my--skills">
         <h3>Skills</h3>
         <p>Project Management, Branding, UI/UX Design, Web Design, App Design, Tech Consultancy, Social Media Management.</p> 
      </div>*/}
    </div>
  );
}
