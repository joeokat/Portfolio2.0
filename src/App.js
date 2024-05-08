import React from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Profile from "./components/Profile.jsx";
import { Services } from "./components/Services.jsx";
import { Partners } from "./components/Partners.jsx";
import { SpartanAds } from "./components/SpartanAds.jsx";
import Socials from "./components/Socials.jsx";
import { SeeMyWork } from "./components/SeeMyWork.jsx";



export default function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Services />
      <SeeMyWork />
      {/* <Partners /> */}
      <SpartanAds />
      <Socials />
    </div>
  );
}
