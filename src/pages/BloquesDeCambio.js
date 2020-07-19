import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import HeroSection from '../components/tabs/HeroSection';
import Footer from '../components/tabs/Footer';

import HeroBl from '../images/Bloques/hero-img-bloques.svg';
import BlueMountain from '../images/Bloques/blue-mountain.svg';
import ContentBloques from '../components/tabs/ContentBloques';

const BloquesDeCambio = () => {
  return (
    <Layout>
      <SEO title='Bloques de Cambio' />
      <div className='main-container'>
        <div className='main-container-inner'>
          <HeroSection HeroBl={HeroBl} />
          <div className='info-container'>
            <div className='info-container-inner'>
              <ContentBloques />
            </div>
            <Footer BlueMountain={BlueMountain} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BloquesDeCambio;
