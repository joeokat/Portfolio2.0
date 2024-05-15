import React from 'react'
//import { Nav, PricingPlans, Socials, } from "../../components";
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import { PricingPlans } from '../components/PricingPlans';

export const PricingPlan = () => {
  return (
    <>
    <Nav />
      <PricingPlans />
    <Socials />
    </>    
  )
}
