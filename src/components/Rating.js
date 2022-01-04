import React from 'react';

const Rating = ({ title, color, rating, votes, PEDB }) => {
  const renderRating = () => {
    const array = [];
    const amountOfFullStars = PEDB ? rating : rating / 2;
    for (let i = 0; i < amountOfFullStars; i++) {
      array.push(
        <i
          key={i}
          className={`star icon ${PEDB ? 'ratingPedb' : ''}`}
          style={{ color: color }}
        />
      );
    }

    for (let i = array.length; i < 5; i++) {
      array.push(
        <i
          key={i * 5}
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
