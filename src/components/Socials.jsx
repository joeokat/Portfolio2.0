import React from "react";
import home from "../assets/home.svg";
import figma from "../assets/figma.svg";
import github from "../assets/github.svg";
import threads from "../assets/threads.svg";
import whatsapp from "../assets/whatsapp.svg";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <div className="footer--container">
      <footer className="social--links">
        
        <Link to="/" rel="noreferrer">
          <img src={home} alt="" />
        </Link>
        <a
          href="https://www.threads.net/@uxjoeokat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={threads} alt="" />
        </a>
        <a href="https://wa.me/2330509994874" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="" />
        </a>
        <a href="https://figma.com/@joeokat">
          <img src={figma} alt="" />
        </a>
        <a href="https://github.com/joeokat" target="_blank" rel="noreferrer">
          <img src={github} alt="" />
        </a>
      </footer>
    </div>
  );
}
