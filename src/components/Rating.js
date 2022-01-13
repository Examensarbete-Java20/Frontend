import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { updateRating } from '../api/request';
import GeneralModal from './modals/GeneralModal';
import GoogleLoginButton from './GoogleLoginButton';

const Rating = ({
  title,
  color,
  rating,
  type,
  votes,
  PEDB,
  content,
  setContent,
  showVotes,
  isLoggedIn,
}) => {
  const [showModal, setShowModal] = useState(false);
  const onRatingChange = (index) => {
    if (PEDB && isLoggedIn) {
      const newContent = updateRating(type, content, index);
      if (newContent)
        newContent.then((data) => {
          if (data) setContent(data);
        });
    } else if (PEDB && !isLoggedIn) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (showModal) {
      setShowModal(false);
    }
  }, [isLoggedIn]);

  const renderRating = () => {
    const array = [];
    const amountOfFullStars = PEDB || showVotes ? rating : rating / 2;
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
      <GeneralModal show={showModal} onDismiss={() => setShowModal(false)}>
        <h1>You need to log in to rate this {type}</h1>
        <GoogleLoginButton />
      </GeneralModal>
      {title} Rating: {renderRating()}
      {PEDB || showVotes ? <div>Votes: {votes}</div> : ''}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps)(Rating);
