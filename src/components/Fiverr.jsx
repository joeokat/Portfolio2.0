import React, { useEffect } from 'react';

const Fiverr = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'fiverr-seller-widget-script-63089d2f-fdc1-48b5-8e85-f3bacbd5dc6a';
    script.src = 'https://widgets.fiverr.com/api/v1/seller/joeokatgh?widget_id=63089d2f-fdc1-48b5-8e85-f3bacbd5dc6a';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-config', '{"category_name":"\\n Programming \\u0026 Tech\\n\\n"}');
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      itemscope
      itemtype='http://schema.org/Person'
      className='fiverr-seller-widget'
      style={{ display: 'inline-block' }}
    >
      <a
        itemprop='url'
        href='https://www.fiverr.com/joeokatgh'
        rel='noreferrer'
        target='_blank'
        title='joeokatgh on Fiverr'
        style={{ display: 'inline-block' }}
      >
        <div
          className='fiverr-seller-content'
          id='fiverr-seller-widget-content-63089d2f-fdc1-48b5-8e85-f3bacbd5dc6a'
          itemprop='contentURL'
          style={{ display: 'none' }}
        ></div>
        <div id='fiverr-widget-seller-data' style={{ display: 'none' }}>
          <div itemprop='name'>joeokatgh</div>
          <div itemscope itemtype='http://schema.org/Organization'>
            <span itemprop='name'>Fiverr</span>
          </div>
          <div itemprop='jobtitle'>Seller</div>
          <div itemprop='description'>
            I am a user-centric UX Engineer skilled in creative problem solving, developing user-friendly products and helping businesses achieve their goals and exceeding their expectations through product design and development.
            I am excited about the opportunity to contribute my skills and expertise to your project. Client satisfaction is my priority, that's why I always try to achieve my client's best satisfaction.
            Don't hesitate to contact me before placing your order.
          </div>
        </div>
      </a>
    </div>
  );
};

export default Fiverr;
