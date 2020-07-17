import React, { Fragment, useLayoutEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { TimelineMax, Power4 } from 'gsap/all';
import utopiaLogo from '../../images/utopia-logo.svg';
import dropLogoBlack from '../../images/drop-logo-black.svg';
/*
import dropLogoBlue from '../../images/drop-logo-blue.svg';
import dropLogoRed from '../../images/drop-logo-red.svg';
import dropLogoGreen from '../../images/drop-logo-green.svg';
*/

gsap.registerPlugin(TimelineMax);

const Header = () => {
  const menuTl = new TimelineMax({ paused: false, reversed: true });

  const responsiveNav = useRef();

  const useWindowWidth = () => {
    const [width, setWidth] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setWidth([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return width;
  };

  const [newWidth] = useWindowWidth();
  console.log(newWidth);

  const navHandler = () => {
    menuTl.to(
      '.responsive-nav',

      {
        display: 'grid',
        opacity: 1,
        height: 'auto',
        duration: 1,
        ease: Power4.easeOut,
      }
    );
    if (newWidth < 1200) {
      togglerMenu();
    }
  };

  const togglerMenu = () => {
    if (responsiveNav.current) {
      menuTl.reversed() ? menuTl.play() : menuTl.reverse(-1);
    }
  };

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
              <div className='black'></div>
            </div>
            <div
              className={
                newWidth < 1200 ? 'responsive-nav' : 'nav-menu-container'
              }
              ref={responsiveNav}
            >
              <ul className='responsive-nav-list nav-menu-container-list'>
                <li className='item'>
                  <Link className='link' to='/EconomiaCircular'>
                    Economía Circular
                  </Link>
                </li>
                <li className='item'>
                  <Link className='link' to='/Principios'>
                    3 Principios
                  </Link>
                </li>
                <li className='item'>
                  <Link className='link' to='/BloquesDeCambio'>
                    Bloques de Cambio
                  </Link>
                </li>
                <li className='item'>
                  <Link className='link' to='/Blog'>
                    Blog
                  </Link>
                </li>
                <div className='space'></div>
              </ul>
            </div>
            <div className='nav-menu-button' onClick={navHandler}>
              <div className='nav-menu-button-dropLogo'>
                <img
                  alt='utopiaDropLogo'
                  className='nav-menu-button-dropLogo-img'
                  src={dropLogoBlack}
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
