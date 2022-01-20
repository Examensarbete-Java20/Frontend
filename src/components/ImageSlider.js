import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/slider.css';
import notFoundImg from '../styles/img/noimagefound.jpg';

const ImageSlider = ({ content, type, contentAction, topten }) => {
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
    return (
      index === current - 1 ||
      index === current + 1 ||
      (current === 0 && index === 2) ||
      (current === length - 1 && index === current - 2)
    );
  };
  //TODO: lägg till topten för att rendera siffor lös de bara bruw
  return (
    <div className='slider'>
      <i className='angle left icon sliderArrow left' onClick={prevSlide} />
      <div className='slider grid'>
        {content.map((content, index) => {
          return (
            <div
              key={index}
              className={`sliderColumn${
                index === current
                  ? ' active'
                  : checkIndexAndCurrent(index)
                  ? ' sides'
                  : ' hide'
              }`}
            >
              {index === current || checkIndexAndCurrent(index) ? (
                <div className={`test${index === 9 ? '3' : ''}`}>
                  {index !== 9 ? (
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
                      onClick={() => contentAction(content.imdb_id)}
                      to={`/show/${type}/${content.imdb_id}`}
                    >
                      <img
                        src={content.image_url}
                        className='sliderImage'
                        alt='No Img'
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = notFoundImg;
                        }}
                      />
                      <h3 className='sliderTitle'>
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
  );
};

export default ImageSlider;
