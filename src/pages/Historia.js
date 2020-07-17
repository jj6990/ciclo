import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import HistorySlider from '../components/historia/HistorySlider';

const Historia = () => {
  return (
    <Layout>
      <SEO title='Historia' />

      <HistorySlider />
    </Layout>
  );
};

export default Historia;
