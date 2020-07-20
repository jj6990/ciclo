import React from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { TimelineMax, Power4 } from 'gsap/all';
import dropLogoBlack from '../../images/drop-logo-black.svg';

gsap.registerPlugin(TimelineMax);

const Footer = ({ GreenMountain, BlueMountain, RedMountain }) => {
  return (
    <div className='footer-container'>
      <div className='footer-container-inner'>
        <div className='nav-menu-button'>
          <div className='nav-menu-button-dropLogo'>
            <img
              alt='utopia DropLogo'
              className='nav-menu-button-dropLogo-img'
              src={dropLogoBlack}
            />
          </div>
        </div>
        <div className='footer-nav'>
          <ul className='footer-nav-list'>
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
        <div className='image-container'>
          <div className='image-container-inner'>
            <img className='footer-green-mountain' src={GreenMountain} />
            <img className='footer-blue-mountain' src={BlueMountain} />
            <img className='footer-red-mountain' src={RedMountain} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
