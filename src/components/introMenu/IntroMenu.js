import React, { Fragment, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { Power4 } from 'gsap/all';
import utopiaLogo from '../../images/utopia-logo.svg';
import dropLogo from '../../images/drop-logo-intro.svg';
import IntroImg from './IntroImg';

gsap.registerPlugin(Power4);

const IntroMenu = ({ newWidth }) => {
  let drop = useRef(null);
  let dropInner = useRef(null);
  let turbulence = useRef(null);
  let disMap = useRef(null);
  let btn = useRef(null);
  let logo = useRef(null);
  let desc = useRef(null);

  let blog = useRef(null);
  let ec = useRef(null);
  let pr = useRef(null);
  let bl = useRef(null);

  const tl = gsap.timeline({ paused: false });
  const tl2 = gsap.timeline({ paused: false, reversed: true });
  const tl3 = gsap.timeline({ paused: false, reversed: true });

  useEffect(() => {
    tl.to(
      turbulence.current,
      3,
      { attr: { baseFrequency: '0 0', ease: Power4.easeOut } },
      0.6
    );
    tl.to(
      disMap.current,
      3,
      { attr: { scale: '0', ease: Power4.easeOut } },
      0.6
    );
    tl.play();
  });

  console.log(newWidth);

  const handleClick = (e) => {
    if (tl3.isActive() && tl2.isActive()) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (newWidth <= 750) {
      tl2
        .to(logo.current, 1, { opacity: 0, duration: 1, ease: Power4.easeOut })
        .to(desc.current, 1, { opacity: 0, duration: 1, ease: Power4.easeOut })
        .to(drop.current, 1, {
          scale: 0,
          duration: 1,
          ease: Power4.easeOut,
          display: 'none',
        })
        .to(btn.current, 1, {
          y: -60,
          duration: 1,
          ease: Power4.easeOut,
        })
        .to(btn.current, 1, {
          scale: 3.3,
          duration: 1,
          ease: Power4.easeOut,
        })
        .to(btn.current, 0.5, {
          className: '+=no-shadow',
          duration: 0.5,
          ease: Power4.easeOut,
        })
        .to(btn.current, 0.5, {
          className: '+=inset-shadow',
          duration: 0.5,
          ease: Power4.easeOut,
        })
        .to(dropInner.current, 0.5, {
          transformOrigin: 'center center',
          display: 'grid',
          opacity: 1,
          duration: 0.5,
          ease: Power4.easeOut,
        })
        .to(blog.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          y: 30,
          opacity: 1,
          ease: Power4.easeOut,
        })
        .to(ec.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          y: 50,
          opacity: 1,
          ease: Power4.easeOut,
        })
        .to(pr.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          y: 70,
          opacity: 1,
          ease: Power4.easeOut,
        })
        .to(bl.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          y: 90,
          opacity: 1,
          ease: Power4.easeOut,
        });
    } else if (newWidth > 750) {
      tl2
        .to(logo.current, 1, { opacity: 0, duration: 1, ease: Power4.easeOut })
        .to(drop.current, 1, {
          scale: 0,
          duration: 1,
          ease: Power4.easeOut,
          display: 'none',
        })
        .to(btn.current, 1, {
          scale: 3.5,
          duration: 1,
          ease: Power4.easeOut,
        })
        .to(btn.current, 0.5, {
          className: '+=no-shadow',
          duration: 0.5,
          ease: Power4.easeOut,
        })
        .to(btn.current, 0.5, {
          className: '+=inset-shadow',
          duration: 0.5,
          ease: Power4.easeOut,
        })
        .to(dropInner.current, 0.5, {
          transformOrigin: 'center center',
          display: 'grid',
          opacity: 1,
          duration: 0.5,
          ease: Power4.easeOut,
        })
        .to(blog.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          y: 65,
          opacity: 1,
          ease: Power4.easeOut,
        })
        .to(ec.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          x: -65,
          opacity: 1,
          ease: Power4.easeOut,
        })
        .to(pr.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          x: 65,
          opacity: 1,
          ease: Power4.easeOut,
        })
        .to(bl.current, 0.5, {
          transformOrigin: 'center center',
          duration: 0.5,
          y: -65,
          opacity: 1,
          ease: Power4.easeOut,
        });
    }

    togglerFooter();
  };

  const togglerFooter = () => {
    tl2.reversed() ? tl2.play() : tl2.reverse();
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
      .to(logo.current, 0.5, {
        opacity: 1,
        duration: 0.5,
        ease: Power4.easeOut,
      });
    tl3.play();
  };

  const handleLeave = () => {
    tl3.reverse();
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
            ref={turbulence}
          />
          <feDisplacementMap
            in='SourceGraphic'
            in2='NOISE'
            scale='30'
            width='100%'
            ref={disMap}
          ></feDisplacementMap>
        </filter>
      </svg>
      <div className='intro pos'>
        <div className='intro-container'>
          <div className='intro-container-logo'>
            <img
              className='intro-container-logo-img'
              src={utopiaLogo}
              alt='utopiaLogo'
              ref={logo}
            />
          </div>
          <div
            className='intro-container-dropLogo'
            onClick={handleClick}
            ref={btn}
          >
            <img
              alt='utopiaDropLogo'
              className='intro-container-dropLogo-img'
              src={dropLogo}
              ref={drop}
            />

            <Link
              className='intro-container-dropLogo-inner'
              to='/Historia'
              ref={dropInner}
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
                  <Link className='link' to='/Blog' ref={blog}>
                    Blog
                  </Link>
                </li>
                <li className='menu-container-list-item'>
                  <Link className='link' to='/EconomiaCircular' ref={ec}>
                    Economía Circular
                  </Link>
                </li>
                <li className='menu-container-list-item'>
                  <Link className='link' to='/BloquesDeCambio' ref={bl}>
                    Bloques de cambio
                  </Link>
                </li>
                <li className='menu-container-list-item'>
                  <Link className='link' to='/Principios' ref={pr}>
                    3 Principios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='intro-container-description'>
            <p className='intro-container-description-text' ref={desc}>
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
