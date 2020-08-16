import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { TimelineMax, Power4 } from 'gsap/all';
import dropLogoBlack from '../../images/drop-logo-black.svg';

gsap.registerPlugin(TimelineMax);

const FooterPrincipios = ({ RedMountain }) => {
  let footNav = useRef(null);
  let navList = useRef(null);
  let imgCont = useRef(null);

  const tl = new TimelineMax({ paused: false, reversed: true });

  const handleClick = (e) => {
    e.preventDefault();
    if (footNav && navList && imgCont) {
      tl.to(footNav, 1, {
        scale: 1.5,
        duration: 1,
        ease: Power4.easeOut,
      })
        .to(footNav, {
          className: '+=no-shadow',
          duration: 1,
          ease: Power4.easeOut,
        })
        .to(footNav, {
          className: '+=inset-shadow',
          duration: 1,
          yPercent: -10,
          ease: Power4.easeOut,
        })
        .to(navList, {
          duration: 1,
          ease: Power4.easeOut,
          display: 'block',
          opacity: 1,
          yPercent: 10,
          transformOrigin: 'center center',
        });
      togglerFooter();
    }
  };
  const togglerFooter = () => {
    if (footNav) {
      tl.reversed() ? tl.play() : tl.reverse();
    }
  };

  return (
    <div className='footer-container'>
      <div className='footer-container-inner'>
        <div className='image-container' ref={(el) => (imgCont = el)}>
          <div className='image-container-inner'>
            <div className='nav-menu-button'>
              <div
                className='nav-menu-button-dropLogo'
                onClick={handleClick}
                ref={(el) => (footNav = el)}
              >
                <img
                  alt='utopia DropLogo'
                  className='nav-menu-button-dropLogo-img'
                  src={dropLogoBlack}
                />
              </div>
            </div>
            <div className='footer-nav'>
              <ul className='footer-nav-list' ref={(el) => (navList = el)}>
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
              </ul>
            </div>
            <img className='footer-red-mountain' src={RedMountain} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPrincipios;
