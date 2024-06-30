import React from 'react';

const PricingCard = ({ tag, tagClass, title, price, features }) => {
  return (
    <div className={`details--card ${tagClass}`}>
      <div className='tag'>{tag}</div>
      <h3>{title}</h3>
      <p><strong>{price}</strong> /timeline</p>
      <hr />
      <p>
      
        <strong>Features:</strong> {features}
      </p>
      <button>Choose Plan</button>
    </div>
  );
};

export const PricingPlans = () => {
  return (
    <div className='pricing--container'>
      <h2>Select a Plan</h2>
      <div className='pricing--plans'>
        <PricingCard
          tag="Standard"
          tagClass="standard"
          title="Web Development"
          service="Full Stack Web Development"
          price="$500 - $1500"
          features="Responsive Design, Backend Development, API Integration"
        />
        <PricingCard
          tag="Popular"
          tagClass="popular"
          title="UI/UX Design"
          service="UI/UX Design"
          price="$300 - $1000"
          features="Wireframes, Prototypes, User Research, User Testing"
        />
        <PricingCard
          tag="Best Value"
          tagClass="best-value"
          title="PWA Development"
          service="Progressive Web App Development"
          price="$800 - $2000"
          features="Offline Support, Fast Load Times, App-like Experience"
        />
      </div>
    </div>
  );
};
