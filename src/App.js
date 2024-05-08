import React from "react";
import "./App.css";
import Profile from "./components/Profile.jsx";
import { Services } from "./components/Services.jsx";
import Nav from "./components/Nav.jsx";

import Socials from "./components/Socials.jsx";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Services />
      
      <Socials />
    </div>
  );
}
