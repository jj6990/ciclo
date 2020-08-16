import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import HeroSection from '../components/tabs/HeroSection';
import FooterPrincipios from '../components/tabs/FooterPrincipios';

import HeroPr from '../images/Principios/hero-img-principios.svg';
import RedMountain from '../images/Principios/red-mountain.svg';
import ContentPrincipios from '../components/tabs/ContentPrincipios';

const Principios = () => {
  return (
    <Layout>
      <SEO title='Principios' />
      <div className='main-container'>
        <div className='main-container-inner'>
          <HeroSection HeroPr={HeroPr} />
          <div className='info-container-pr'>
            <ContentPrincipios />
          </div>
          <FooterPrincipios RedMountain={RedMountain} />
        </div>
      </div>
    </Layout>
  );
};

export default Principios;
