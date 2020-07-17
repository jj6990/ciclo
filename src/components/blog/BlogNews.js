import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SearchList from './SearchList';
import $ from 'jquery';
import HeroBlog from '../../images/blog/hero-blog.svg';

const BlogNews = () => {
  const [search, setSearch] = useState({
    query: '',
    results: [],
    loading: false,
  });

  const { query, results } = search;
  const keyRef = useRef();

  useEffect(() => {
    $('.search-input').focus();
    setSearch({ ...search, loading: true });
    const searchUrl = `https://newsapi.org/v2/everything?language=en&pageSize=18&sortBy=publishedAt&q=circular-economy&apiKey=eabfb47b41144112b879e64d5490b68f`;
    axios
      .get(searchUrl)
      .then((res) => {
        console.log(res.data.articles);
        setSearch({
          query: query,
          results: res.data.articles,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /*
  const onChange = (e) => {
    const query = e.target.value;

    if (query) {
      setSearch({ ...search, loading: true });
      const searchUrl = `https://newsapi.org/v2/everything?q=circular-economy${query}&apiKey=eabfb47b41144112b879e64d5490b68f`;
      axios
        .get(searchUrl)
        .then((res) => {
          console.log(res.data.articles);
          setSearch({
            query: query,
            results: res.data.articles,
            loading: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSearch({ ...search, query: '', results: [] });
    }
  };
*/
  const onDeleteBtn = () => {
    setSearch({ ...search, query: '', results: [] });
  };

  return (
    <div>
      <div className='main-container'>
        <div className='main-container-inner'>
          <div className='hero-container'>
            <div className='hero-container-inner'>
              <img src={HeroBlog} alt='hero-blog-img' />
            </div>
          </div>
          <div className='news-container'>
            <div className='news-container-inner'>
              <div className='news-container-inner-header'>
                <div className='title-section-container'>
                  <div className='title-section-container-inner'>
                    <h1 className='title'>Blog</h1>
                  </div>
                </div>
                {/*
                <div className='search-section-container'>
                  <div className='search-section-container-inner'>
                    <label className='search-label' htmlFor='search-input'>
                      <input
                        className='search-input'
                        name='query'
                        type='text'
                        id='search-Input'
                        placeholder='Search...'
                        onChange={onChange}
                        value={query}
                      />
                      <span
                        onClick={onDeleteBtn}
                        className={query ? 'display' : 'no-display'}
                      >
                        X
                      </span>
                    </label>
                  </div>
                </div>
                */}
                <div className='line-container'>
                  <div className='line-container-inner'></div>
                </div>
              </div>
              <div className='news-container-inner-body'>
                <SearchList results={results} keyRef={keyRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;