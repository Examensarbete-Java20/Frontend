import React from 'react';

import Rating from './Rating';
import notFoundImg from '../../styles/img/noimagefound.jpg';

const Poster = ({ content, focus, showRating, borderRadius }) => {
  return (
    <div>
      <img
        src={content.image_url}
        className={`sliderImage${borderRadius ? ' borderRadius' : ''}`}
        alt='No Img'
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = notFoundImg;
        }}
      />
      {showRating && (
        <div className={`slideImg rating${focus ? ' focus' : ''}`}>
          <Rating
            PEDB
            rating={content.ownRating}
            votes={content.totalOfVoters}
            noText
          />
        </div>
      )}
    </div>
  );
};

export default Poster;
