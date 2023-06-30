import React from "react";
import me from "../assets/me.jpg";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import verified from "../assets/verified.png";
import web from "../assets/web.svg";

export default function Profile() {
  return (
    <div className="wrapper">
      <img className="profile--image" src={me} alt="Joshua" />
      <div>
        <h4 className="full--name">
          Joshua O. Ofosu
          <img src={verified} alt="" className="icon" />
        </h4>

        <p className="job--title">Project Manager</p>
        <a
          className="web--link"
          href="https://behance.net/joeokat"
          rel="noreferrer"
          target="_blank"
        >
          My Portfolio
          <img src={web} alt="" className="icon" />
        </a>
      </div>

      <div className="cta-btn">
        <a className="email--btn" href="mailto:ofosujoshua73@yahoo.com">
          <img src={email} alt="" />
          Email
        </a>
        <a
          className="linkedin--btn"
          href="https://linkedin.com/in/joeokat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
