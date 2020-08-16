import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import IntroMenu from '../introMenu/IntroMenu';

import '../app.css';

const IntroLayout = ({ children }) => {
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
  return (
    <>
      <IntroMenu newWidth={newWidth}>
        <main>{children}</main>
      </IntroMenu>
    </>
  );
};
IntroLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default IntroLayout;
