import React from 'react';
import PropTypes from 'prop-types';
import IntroMenu from '../introMenu/introMenu';

import '../app.css';

const IntroLayout = ({ children }) => {
  return (
    <>
      <IntroMenu>
        <main>{children}</main>
      </IntroMenu>
    </>
  );
};
IntroLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default IntroLayout;
