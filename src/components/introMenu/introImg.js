import React from 'react';
import redMountain from '../../images/introImg/redMountain.svg';

const IntroImg = () => {
  return (
    <div className='composition'>
      <div className='composition-container'>
        <img
          className='composition-container-red-mountain'
          alt='red-mountain'
          src={redMountain}
        />
      </div>
    </div>
  );
};

export default IntroImg;
