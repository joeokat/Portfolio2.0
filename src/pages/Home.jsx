import React from "react";
//import {Services, Partners,SpartanAds, Work } from "../components";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Socials from "../components/Socials";
import { Services } from "../components/Services";
import { Partners } from "../components/Partners";
import { SpartanAds } from "../components/SpartanAds";
import { Work } from "../components/Work";
export default function App() {
  return (
        <>
            <Nav />
            <Profile />
            <Services />
            <Work />
            <Partners />
            <SpartanAds />
            <Socials />    
        </>
  );
}
