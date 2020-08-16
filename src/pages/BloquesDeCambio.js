import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import HeroSection from '../components/tabs/HeroSection';

import HeroBl from '../images/Bloques/hero-img-bloques.svg';
import BlueMountain from '../images/Bloques/blue-mountain.svg';
import ContentBloques from '../components/tabs/ContentBloques';
import FooterBloques from '../components/tabs/FooterBloques';

const BloquesDeCambio = () => {
  return (
    <Layout>
      <SEO title='Bloques de Cambio' />
      <div className='main-container'>
        <div className='main-container-inner'>
          <HeroSection HeroBl={HeroBl} />
          <div className='info-container-bl'>
            <ContentBloques />
          </div>
          <FooterBloques BlueMountain={BlueMountain} />
        </div>
      </div>
    </Layout>
  );
};

export default BloquesDeCambio;
