import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import BlogNews from '../components/blog/BlogNews';

const Blog = () => {
  return (
    <Layout>
      <SEO title='Blog' />
      <BlogNews />
    </Layout>
  );
};

export default Blog;
