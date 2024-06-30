import React from 'react'

import Nav from '../components/Nav';
import Socials from '../components/Socials';
import Portfolio from '../components/Portfolio';

export const RecentWork = () => {
  return (
    <>
      <Nav />
        <div className="center">
          <Portfolio />
        </div>
      <Socials />
    </>
  )
}
