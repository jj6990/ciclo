import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import HeroSection from '../components/tabs/HeroSection';
import Footer from '../components/tabs/Footer';

import HeroEc from '../images/Economia-Circular/hero-economia-circular.svg';
import GreenMountain from '../images/Economia-Circular/green-mountain.svg';
import ContentEconomia from '../components/tabs/ContentEconomia';

const EconomiaCircular = () => {
  return (
    <Layout>
      <SEO title='Economía Circular' />
      <div className='main-container'>
        <div className='main-container-inner'>
          <HeroSection HeroEc={HeroEc} />
          <div className='info-container'>
            <ContentEconomia />

            <Footer GreenMountain={GreenMountain} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EconomiaCircular;
