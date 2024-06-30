import React from 'react'

import Nav from '../components/Nav';
import Socials from '../components/Socials';
import { PricingPlans } from '../components/PricingPlans';


export const PricingPlan = () => {
  return (
    <>
      <Nav />
        <div className="center">
          <PricingPlans />
        </div>
      <Socials />
    </>    
  )
}
