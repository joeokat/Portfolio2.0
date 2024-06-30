import React from "react";
import me from "../assets/me.jpg";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import verified from "../assets/verified.png";

export default function Profile() {
  return (
    <div className="wrapper">
      <img className="profile--image" src={me} alt="JoeOkat" />
      <div>
        <h4 className="full--name">
          Joshua Ofosu
          <img src={verified} alt="" className="icon" />
        </h4>

        <p className="job--title">UI/UX Designer | Web App Developer</p>
        
      </div>

      <p className="hero--section">I create custom 
         Mobile Apps and Websites that promotes <span>Business Growth</span>
      </p>
      <p className="work--paragraph">Ready to embark on your next project? Feel free to connect with me.</p>

      <div className="cta-btn">
        <a className="email--btn" href="mailto:ofosujoshua73@yahoo.com">
          <img src={email} alt="" />
          Start a project
        </a>
        <a
          className="linkedin--btn"
          href="https://linkedin.com/in/joeokat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" />
          Let's Connect
        </a>
      </div>
    </div>
  );
}
