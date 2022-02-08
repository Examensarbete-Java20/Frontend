import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { updateRating } from '../../api/request';
import GeneralModal from '../modals/GeneralModal';
import GoogleLoginButton from '../GoogleLoginButton';

const Rating = ({
  title,
  color,
  rating,
  type,
  votes,
  MWF,
  content,
  setContent,
  showVotes,
  isLoggedIn,
  userId,
  noText,
}) => {
  const [showModal, setShowModal] = useState(false);
  const onRatingChange = (index) => {
    if (MWF && isLoggedIn) {
      const newContent = updateRating(type, content, userId, index);
      if (newContent)
        newContent.then((data) => {
          if (data) setContent(data);
        });
    } else if (MWF && !isLoggedIn) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (showModal && isLoggedIn) {
      setShowModal(false);
    }
  }, [isLoggedIn, showModal]);

  const renderRating = () => {
    const array = [];
    const amountOfFullStars = MWF || showVotes ? rating : rating / 2;
    for (let i = 0; i < amountOfFullStars; i++) {
      array.push(
        <i
          onClick={() => onRatingChange(i + 1)}
          key={i}
          className={`star icon ${MWF ? 'ratingMWF' : ''}`}
          style={{ color: color }}
        />
      );
    }

    for (let i = array.length; i < 5; i++) {
      array.push(
        <i
          onClick={() => onRatingChange(i + 1)}
          key={i}
          className={`star outline icon ${MWF ? 'ratingMWF' : ''}`}
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
      {title} {noText ? '' : 'Rating:'} {renderRating()}
      {votes ? <div>Votes: {votes}</div> : ''}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userId: state.user.user.googleId,
  };
};

export default connect(mapStateToProps)(Rating);
