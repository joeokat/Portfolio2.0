import React from 'react';


const PricingCard = ({ tag, tagClass, title, service, price, features }) => {
  const featureList = features.split(',').map((feature, index) => (
    <p key={index}>{feature.trim()}</p>
  ));

  const openWhatsApp = () => {
    const phoneNumber = '+233509994874';
    const message = 'Hello, I am interested in your UI/UX design & development services. Can we discuss further?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`details--card ${tagClass}`}>
      <div className='tag'>{tag}</div>
      <h3>{title}</h3>
      <p><strong>{price}</strong> /Gig</p>
      <p>{service}</p>
      <hr />
      <div>{featureList}</div>
      <button onClick={openWhatsApp}>Choose Plan</button>
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
          service="Take your business or service to the next level with a landing page or website"
          price="$240"
          features="✓ Responsive Web Design, ✓ Full-stack Development, ✓ Simple Form Handling, ✓ Basic SEO Practices, ✓ API Integration"
        />
        <PricingCard
          tag="Popular"
          tagClass="popular"
          title="UI/UX Design"
          service="I'll craft a beautiful web application that resonates with your ideal clients and grows your business"
          price="$305"
          features="✓  User Research, ✓  Lo-Fi Wireframes, ✓  Hi-Fi Mockup Design, ✓  Interactive Prototypes, ✓  Micro Animation, ✓  User Testing"
        />
        <PricingCard
          tag="Best Value"
          tagClass="best-value"
          title="PWA Development"
          service="Reach new audience everywhere and drive global success"
          price="$100"
          features=" ✓ Responsive App Design, ✓  App-like Experience, ✓  Fast Load Time, ✓ App Shortcut, ✓  Android App Publishing,  ✓  Add to Home Screen Functionality"
        />
      </div>
    </div>
  );
};
