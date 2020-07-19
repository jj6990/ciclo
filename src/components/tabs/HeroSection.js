import React from 'react';

const HeroSection = ({ HeroEc, HeroBl, HeroPr }) => {
  return (
    <div className='hero-container'>
      <div className='hero-container-inner'>
        <img src={HeroEc} />
        <img src={HeroBl} />
        <img src={HeroPr} />
      </div>
    </div>
  );
};

export default HeroSection;
