import React, { Fragment, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { TimelineMax, Power4 } from 'gsap/all';
import utopiaLogo from '../../images/utopia-logo.svg';
import dropLogo from '../../images/drop-logo.svg';
import IntroImg from './IntroImg';

gsap.registerPlugin(TimelineMax, Power4);

const IntroMenu = () => {
  let drop = useRef(null);
  let dropInner = useRef(null);
  let turbulence = useRef(null);
  let disMap = useRef(null);
  let button = useRef(null);
  let logo = useRef(null);

  let blog = useRef(null);
  let ec = useRef(null);
  let pr = useRef(null);
  let bl = useRef(null);

  const tl = new TimelineMax({ paused: false });
  const tl2 = new TimelineMax({ paused: false, reversed: true });
  const tl3 = new TimelineMax({ paused: false, reversed: true });

  useEffect(() => {
    tl.to(
      turbulence,
      3,
      { attr: { baseFrequency: '0 0', ease: Power4.easeOut } },
      0.6
    );
    tl.to(disMap, 3, { attr: { scale: '0', ease: Power4.easeOut } }, 0.6);
    tl.play();
  });

  const handleClick = (e) => {
    if (tl2.isActive()) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    tl2
      .to(logo, 1, { opacity: 0, duration: 1, ease: Power4.easeOut })
      .to(drop, 1, {
        scale: 0,
        duration: 1,
        ease: Power4.easeOut,
        display: 'none',
      })
      .to(button, 1, {
        scale: 3,
        duration: 1,
        ease: Power4.easeOut,
      })
      .to(button, 0.5, {
        className: '+=no-shadow',
        duration: 0.5,
        ease: Power4.easeOut,
      })
      .to(button, 0.5, {
        className: '+=inset-shadow',
        duration: 0.5,
        ease: Power4.easeOut,
      })
      .to(dropInner, 0.5, {
        transformOrigin: 'center center',
        display: 'grid',
        opacity: 1,
        duration: 0.5,
        ease: Power4.easeOut,
      })
      .to(blog, 0.5, {
        transformOrigin: 'center center',
        duration: 0.5,
        y: -70,
        opacity: 1,
        ease: Power4.easeOut,
      })
      .to(ec, 0.5, {
        transformOrigin: 'center center',
        duration: 0.5,
        x: 70,
        opacity: 1,
        ease: Power4.easeOut,
      })
      .to(pr, 0.5, {
        transformOrigin: 'center center',
        duration: 0.5,
        y: 70,
        opacity: 1,
        ease: Power4.easeOut,
      })
      .to(bl, 0.5, {
        transformOrigin: 'center center',
        duration: 0.5,
        x: -70,
        opacity: 1,
        ease: Power4.easeOut,
      });
    tl2.play();
    console.log('play');
  };

  const handleHoverButton = (e) => {
    if (tl3.isActive() && tl2.isActive()) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    tl3
      .to(
        '.link',
        0.5,
        {
          color: 'transparent',
          duration: 0.5,
          ease: Power4.easeOut,
        },
        0.5
      )
      .to('.inset-shadow', 0.5, {
        backgroundColor: 'transparent',
        duration: 0.5,
        ease: Power4.easeOut,
      })
      .to(logo, 0.5, { opacity: 1, duration: 0.5, ease: Power4.easeOut });
    tl3.play();
    console.log('play');
  };

  const handleLeave = (e) => {
    tl3.reverse();
    console.log('on leave');
  };

  return (
    <Fragment>
      <svg>
        <filter id='noise' x='0%' y='0%'>
          <feTurbulence
            baseFrequency='.07 .03'
            result='NOISE'
            numOctaves='1'
            id='turbulence'
            ref={(el) => (turbulence = el)}
          />
          <feDisplacementMap
            in='SourceGraphic'
            in2='NOISE'
            scale='30'
            width='100%'
            ref={(el) => (disMap = el)}
          ></feDisplacementMap>
        </filter>
        []
      </svg>
      <div className='intro'>
        <div className='intro-container'>
          <div className='intro-container-logo'>
            <img
              className='intro-container-logo-img'
              src={utopiaLogo}
              alt='utopiaLogo'
              ref={(el) => (logo = el)}
            />
          </div>
          <div
            className='intro-container-dropLogo'
            onClick={handleClick}
            ref={(el) => (button = el)}
          >
            <img
              alt='utopiaDropLogo'
              className='intro-container-dropLogo-img'
              src={dropLogo}
              ref={(el) => (drop = el)}
            />

            <Link
              className='intro-container-dropLogo-inner'
              to='/Historia'
              ref={(el) => (dropInner = el)}
            >
              <img
                alt='utopiaDropLogo'
                className='intro-container-dropLogo-inner-img'
                src={dropLogo}
                onMouseEnter={handleHoverButton}
                onMouseLeave={handleLeave}
              />
              <div className='click-container'>
                <div className='click-container-inner'>
                  <p className='click-container-inner-text'>¡click!</p>
                </div>
              </div>
            </Link>
            <div className='menu-container'>
              <ul className='menu-container-list'>
                <li className='menu-container-list-item'>
                  <Link className='link' to='/Blog' ref={(el) => (blog = el)}>
                    Blog
                  </Link>
                </li>
                <li className='menu-container-list-item'>
                  <Link
                    className='link'
                    to='/EconomiaCircular'
                    ref={(el) => (ec = el)}
                  >
                    Economía Circular
                  </Link>
                </li>
                <li className='menu-container-list-item'>
                  <Link
                    className='link'
                    to='/Principios'
                    ref={(el) => (pr = el)}
                  >
                    3 Principios
                  </Link>
                </li>
                <li className='menu-container-list-item'>
                  <Link
                    className='link'
                    to='/BloquesDeCambio'
                    ref={(el) => (bl = el)}
                  >
                    Bloques de Cambio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='intro-container-description'>
            <p className='intro-container-description-text'>
              ¿Cómo seria un mundo mejor?
            </p>
          </div>
        </div>
      </div>
      <IntroImg />
    </Fragment>
  );
};

export default IntroMenu;
