import React from "react";
import "./App.css";
import Profile from "./components/Profile.jsx";
import { Services } from "./components/Services.jsx";
// import Info from "./components/Info.jsx";
// import { SpartanAds } from "./components/SpartanAds.jsx";
// import { Portfolio } from "./components/Portfolio.jsx";
import Socials from "./components/Socials.jsx";

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
