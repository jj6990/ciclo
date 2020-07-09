import React, { Fragment } from 'react';
import utopiaLogo from '../../images/utopia-logo.svg';
import dropLogo from '../../images/drop-logo.svg';

const IntroMenu = () => {
  return (
    <Fragment>
      <div className='intro-container'>
        
        <img src={utopiaLogo} />
        <img src={dropLogo} />
      </div>
    </Fragment>
  );
};

export default IntroMenu;
