import React from 'react';
import ArrowIcon from '../../images/arrow-icon.svg';

const SearchList = ({ results, keyRef }) => {
  return (
    <div className='results-container' ref={keyRef}>
      <div className='results-container-inner'>
        {results.map((result, i) => {
          const { title, author, description, url, urlToImage } = result;
          return (
            <div className='card' key={i}>
              <div className='card-inner'>
                <div className='title'>
                  <div className='title-inner'>
                    <h3 className='title-inner-text'>
                      <a href={url}>{title}</a>
                    </h3>
                  </div>
                </div>
                <div className='image'>
                  <div className='image-inner'>
                    <a href={url}>
                      <img
                        src={urlToImage}
                        className='image-inner-img'
                        alt='news-img'
                      />
                    </a>
                  </div>
                </div>
                <div className='description'>
                  <div className='description-inner'>
                    <p className='description-inner-text'>{description}</p>
                    <p className='description-inner-author'>Por: {author}</p>
                  </div>
                </div>
                <div className='footer-card'>
                  <div className='footer-card-inner'>
                    <div className='footer-card-inner-text'>
                      <p>
                        {' '}
                        <a href={url}>Leer más...</a>
                      </p>
                    </div>
                    <div className='footer-card-inner-button'>
                      <a href={url}>
                        <img src={ArrowIcon} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchList;
