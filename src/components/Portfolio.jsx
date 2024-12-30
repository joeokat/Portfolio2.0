//import React from 'react'
//import web from "../assets/web.svg"
//import cv from "../assets/cv.jpg";
//import odx from "../assets/odx.png";

// export const Portfolio = () => {
//   return (
//     <div className='portfolio--container'>
//       <h2 className='recent--work'>Recent Work</h2>
        
//         <div className="portfolio--row">
//             <div className='portfolio--card'>
//                 <img src={odx} alt="" />
//                 <p className='title'>Soccer Tips App</p>
//                 <p> Web Technologies: Svelte.js</p>
//                 <a className='view--BTN' href="https://odx.vercel.app" target='_blank' rel='noreferrer'> View Live Project
//                 <img src={web} alt="" />
//                 </a>
//             </div>

//             <div className='portfolio--card'>
//                 <img src={cv} alt="" />
//                 <p className='title'>Portfolio Website 2.0</p>
//                 <p> Web Technologies: HTML + CSS</p>
//                 <a className='view--BTN' href="https://joshuaofosu.vercel.app/" target='_blank' rel='noreferrer'> View Live Project
//                 <img src={web} alt="" />
//                 </a>
//             </div>
//         </div>
//     </div>
//   )
// }

// REFACTORED CODE
import React from 'react';
import web from "../assets/web.svg";
import cv from "../assets/cv.jpg";
import odx from "../assets/odx.png";

const Portfolio = () => {
  return (
    <div className='portfolio--container'>
      <h2 className='recent--work'>Recent Developments</h2>
        
      <div className="portfolio--row">
        <ProjectCard
          image={odx}
          title="Spartan Tips"
          technologies="Web App: Svelte.js"
          liveLink="https://odx.vercel.app"
        />
        
        <ProjectCard
          image={cv}
          title="Portfolio Website 1.0"
          technologies="Frontend: HTML + CSS"
          liveLink="https://joshuaofosu.vercel.app/"
        />
      </div>
      
    <a className='explore' href="https://behance.net/joeokat" target='_blank' rel='noreferrer'>Explore More</a>
    </div>
  );
}

const ProjectCard = ({ image, title, technologies, liveLink }) => {
  return (
    <div className='portfolio--card'>
      <img src={image} alt={title} />
      <p className='title'>{title}</p>
      <p>{technologies}</p>
      <a className='view--BTN' href={liveLink} rel='noreferrer'>
        View Live Project
        <img src={web} alt="web icon" />
      </a>
    </div>
  );
}

export default Portfolio;
