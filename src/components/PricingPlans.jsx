import React from 'react';

export const PricingPlans = () => {
  return (
    <div className='pricing--container'>
      <h2>Select a Plan</h2>
      <div className='pricing--plans'>
        <div className='details--card standard'>
          <div className='tag'>Standard</div>
          <h3>Web Development</h3>
          <hr/>
          <p>
            <strong>Service:</strong> Full Stack Web Development<br/>
            <strong>Price:</strong> $500 - $1500<br/>
          </p>
          <hr/>
          <p>
            <strong>Features:</strong> Responsive Design, Backend Development, API Integration
          </p>
          <button>Choose Plan</button>
        </div>
        <div className='details--card popular'>
          <div className='tag'>Popular</div>
          <h3>UI/UX Design</h3>
          <hr/>
          <p>
            <strong>Service:</strong> UI/UX Design<br/>
            <strong>Price:</strong> $300 - $1000<br/>
          </p>
          <hr/>
          <p>
            <strong>Features:</strong> Wireframes, Prototypes, User Research, User Testing
          </p>
          <button>Choose Plan</button>
        </div>
        <div className='details--card best-value'>
          <div className='tag'>Best Value</div>
          <h3>PWA Development</h3>
          <hr/>
          <p>
            <strong>Service:</strong> Progressive Web App Development<br/>
            <strong>Price:</strong> $800 - $2000<br/>
          </p>
          <hr/>
          <p>
            <strong>Features:</strong> Offline Support, Fast Load Times, App-like Experience
          </p>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};
