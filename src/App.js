import React from "react";
import Profile from "./components/Profile.jsx";
import Info from "./components/Info.jsx";
import Socials from "./components/Socials.jsx";
import "./App.css";
import { SpartanAds } from "./components/SpartanAds.jsx";
import { Services } from "./components/Services.jsx";
import { Portfolio } from "./components/Portfolio.jsx";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <Services />
      {/* <Portfolio /> */}
      {/* <Info /> */}
      {/* <SpartanAds /> */}
      <Socials />
    </div>
  );
}
