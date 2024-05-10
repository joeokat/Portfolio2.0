import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecentWork } from "./pages/RecentWork.js";
import { PricingPlan } from "./pages/PricingPlan.js";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Profile from "./components/Profile.jsx";
import {Services} from "./components/Services.jsx";
import {Partners} from "./components/Partners.jsx";
import {SpartanAds} from "./components/SpartanAds.jsx";
import Socials from "./components/Socials.jsx";
import {Work} from "./components/Work.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Profile />
        <Services />
        <Work />
        <Partners />
        <SpartanAds />
        <Socials />
          {/* <Routes>
            <Route exact path="/RecentWork" element={<RecentWork />} />
            <Route exact path="/PricingPlan" element={<PricingPlan />} />
          </Routes> */}
    </BrowserRouter>       
  );
}
