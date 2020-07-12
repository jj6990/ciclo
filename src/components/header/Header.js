import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { TimelineMax, Power4 } from 'gsap/all';
import utopiaLogo from '../../images/utopia-logo.svg';
import dropLogoBlue from '../../images/drop-logo-blue.svg';

const Header = ({ siteTitle }) => {
  return (
    <Fragment>
      <div className='menu-container'>
        <div className='menu-container-inner'>
          <nav className='menu-container-inner-nav'>
            <div className='nav-logo'>
              <div className='nav-logo-inner'>
                <Link className='nav-logo-inner-link' to='/'>
                  <img
                    className='nav-logo-inner-link-img'
                    atl='UtopíaLogo'
                    src={utopiaLogo}
                  />
                </Link>
              </div>
            </div>
            <div className='nav-middle-line'>
              <div className='nav-middle-line-inner'></div>
            </div>
            <div className='nav-menu-container'>
              <div className='nav-menu-container-dropLogo'>
                <img
                  alt='utopiaDropLogo'
                  className='nav-menu-container-dropLogo-img'
                  src={dropLogoBlue}
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
