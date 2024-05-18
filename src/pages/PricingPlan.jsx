import React from 'react'

import Nav from '../components/Nav';
import Socials from '../components/Socials';
import { PricingPlans } from '../components/PricingPlans';
import Fiverr from '../components/Fiverr';

export const PricingPlan = () => {
  return (
    <>
      <Nav />
        <div className="center">
          <PricingPlans />
          <Fiverr />
        </div>
      <Socials />
    </>    
  )
}
