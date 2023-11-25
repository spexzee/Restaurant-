import React from 'react';
import './Newsletter.css';
import SubHeading from './../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title='Newsletter' />
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">And Never Miss Latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" name="email" id="email" placeholder='Enter your E-mail' />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
