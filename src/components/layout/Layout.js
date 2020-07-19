import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../header/Header';
import '../app.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
      <Header siteTitle={data.site.siteMetadata.title} newWidth={newWidth} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
