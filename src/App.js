import React from "react";
import Profile from "./components/Profile.jsx";
import Info from "./components/Info.jsx";
import Socials from "./components/Socials.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <Info />
      <Socials />
    </div>
  );
}
