import React from 'react';

const Footer = ({ GreenMountain, BlueMountain, RedMountain }) => {
  return (
    <div className='footer-container'>
      <div className='footer-container-inner'>
        <img src={GreenMountain} />
        <img src={BlueMountain} />
        <img src={RedMountain} />
      </div>
    </div>
  );
};

export default Footer;
