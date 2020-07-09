import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React, { useState, Fragment } from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Header = ({ siteTitle }) => {
  return (
    <Fragment>
      <Helmet>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'
          rel='stylesheet'
        />
      </Helmet>
      <header className='header'>
        <div className='brand-cont'>
          <h1 className='site-title'>
            <Link to='/'>{siteTitle}</Link>
          </h1>
          <Link to='/'>
            <FontAwesomeIcon className='icon' icon={faInstagram} />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon className='icon' icon={faFacebook} />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon className='icon' icon={faTwitter} />
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
