import React from 'react';


const PricingCard = ({ tag, tagClass, title, service, price, features }) => {
  const featureList = features.split(',').map((feature, index) => (
    <p key={index}>{feature.trim()}</p>
  ));

  return (
    <div className={`details--card ${tagClass}`}>
      <div className='tag'>{tag}</div>
      <h3>{title}</h3>
      <p><strong>{price}</strong> /gig</p>
      <p>{service}</p>
      <hr />
      <div>{featureList}</div>
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
          service="Jumpstart your business growth with a landing page or a full website"
          price="$75"
          features="Responsive Design, React.js Development, Simple Form Handling, Basic SEO Practices, API Integration"
        />
        <PricingCard
          tag="Popular"
          tagClass="popular"
          title="UI/UX Design"
          service="I will design a visually stunning web application that targets your ideal clients"
          price="$300"
          features="User Research, Lo-Fi Wireframes, Hi-Fi Mockup Design, Interactive Prototypes, Micro Animation, User Testing"
        />
        <PricingCard
          tag="Best Value"
          tagClass="best-value"
          title="PWA Development"
          service="Progressive Web App Development"
          price="$116"
          features="Source File, Fast Load Time, Mobile App for publishing, App-like Experience, Add to Home Screen Functionality"
        />
      </div>
    </div>
  );
};
