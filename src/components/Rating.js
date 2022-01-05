import React from 'react';

import { updateRating } from '../api/request';

const Rating = ({
  title,
  color,
  rating,
  type,
  votes,
  PEDB,
  content,
  setContent,
}) => {
  const onRatingChange = (index) => {
    if (PEDB) {
      const newContent = updateRating(type, content, index);
      if (newContent)
        newContent.then((data) => {
          if (data) setContent(data);
        });
    }
  };

  const renderRating = () => {
    const array = [];
    const amountOfFullStars = PEDB ? rating : rating / 2;
    for (let i = 0; i < amountOfFullStars; i++) {
      array.push(
        <i
          onClick={() => onRatingChange(i + 1)}
          key={i}
          className={`star icon ${PEDB ? 'ratingPedb' : ''}`}
          style={{ color: color }}
        />
      );
    }

    for (let i = array.length; i < 5; i++) {
      array.push(
        <i
          onClick={() => onRatingChange(i + 1)}
          key={i}
          className={`star outline icon ${PEDB ? 'ratingPedb' : ''}`}
          style={{ color: color }}
        />
      );
    }

    return array;
  };

  return (
    <div style={{ marginTop: '4px' }}>
      {title} Rating: {renderRating()}
      {PEDB ? <div>Votes: {votes}</div> : ''}
    </div>
  );
};

export default Rating;
