import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { contentAction } from '../../redux/actions';
import '../../styles/slider.css';
import empty from '../../styles/img/empty.gif';
import Poster from './Poster';

const ImageSlider = ({ content, type, contentAction, topTen, watchlist }) => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(content.length);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setLength(content.length);
  }, [content.length]);

  const checkIndexAndCurrent = (index) => {
    if (watchlist) {
      return (
        index === current - 1 ||
        index === current + 1 ||
        (current === 0 && index === 2) ||
        (current === 0 && index === 3) ||
        (current === 0 && index === 4) ||
        (current === 1 && index === current + 2) ||
        (current === 1 && index === current + 3) ||
        (current >= 2 && index === current + 2) ||
        (current >= 2 && index === current - 2) ||
        (current === length - 2 && index === current - 3) ||
        (current === length - 1 && index === current - 2) ||
        (current === length - 1 && index === current - 3) ||
        (current === length - 1 && index === current - 4)
      );
    }

    return (
      index === current - 1 ||
      index === current + 1 ||
      (current === 0 && index === 2) ||
      (current === length - 1 && index === current - 2)
    );
  };

  const isFirst = (index) => {
    return (
      (index === 0 && current === 0) ||
      (index === current - 1 && current === 1) ||
      (index === current - 2 && current > 1 && current < length - 2) ||
      (index === current - 3 && current === length - 2) ||
      (index === current - 4 && current === length - 1)
    );
  };

  const isLast = (index) => {
    return (
      (index === 4 && current === 0) ||
      (index === current + 3 && current === 1) ||
      (index === current + 2 && current > 1 && current < length - 2) ||
      (index === current + 1 && current === length - 2)
    );
  };

  return content && content.length ? (
    <div className='slider'>
      <i className='angle left icon sliderArrow left' onClick={prevSlide} />
      <div className='slider grid'>
        {content.map((content, index) => {
          return (
            <div
              key={index}
              className={`sliderColumn${watchlist ? 'Watchlist' : ''} ${
                watchlist && isFirst(index)
                  ? 'first'
                  : watchlist && isLast(index)
                  ? 'last'
                  : ''
              }${
                index === current
                  ? ' active'
                  : checkIndexAndCurrent(index)
                  ? ' sides'
                  : ' hide'
              }`}
            >
              {index === current || checkIndexAndCurrent(index) ? (
                <div className={topTen && `test${index === 9 ? '3' : ''}`}>
                  {!topTen ? (
                    ''
                  ) : index !== 9 ? (
                    <span className='sliderNumber one'>{index + 1}</span>
                  ) : (
                    <div className='sliderNumber two'>
                      <span className='sliderNumber two first'>1</span>
                      <span className='sliderNumber two secound'>0</span>
                    </div>
                  )}
                  <div className='test2'>
                    <Link
                      className='slideStuff'
                      onClick={(e) => contentAction(content.imdb_id)}
                      to={`/show/${type ? type : content.type}/${
                        content.imdb_id
                      }`}
                    >
                      <div className={`slideImg`}>
                        <Poster
                          content={content}
                          focus={index === current}
                          showRating
                          borderRadius={topTen}
                        />
                      </div>
                      <h3 className={`sliderTitle`}>
                        {content.title.length > 26
                          ? `${content.title.slice(0, 26)}...`
                          : content.title}
                        {content.release &&
                          ` (${content.release.substring(0, 4)})`}
                      </h3>
                    </Link>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </div>
      <i className='angle right icon sliderArrow right' onClick={nextSlide} />
    </div>
  ) : (
    <div className='emptyList'>
      <h1>This list is empty</h1>
      <img src={empty} alt='' />
    </div>
  );
};

export default connect(null, { contentAction })(ImageSlider);