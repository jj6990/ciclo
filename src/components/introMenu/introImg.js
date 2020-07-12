import React, { useRef } from 'react';
import redMountain from '../../images/introImg/redMountain.svg';

const IntroImg = () => {
  let redMount = useRef(null);

  return (
    <div className='composition'>
      <div className='composition-container'>
        <img
          className='composition-container-red-mountain'
          alt='red-mountain'
          src={redMountain}
          ref={(el) => (redMount = el)}
        />
      </div>
    </div>
  );
};

export default IntroImg;
