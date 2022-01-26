import React from 'react';
import { connect } from 'react-redux';

import Rating from './Rating';
import notFoundImg from '../../styles/img/noimagefound.jpg';
import { removeFromWatchList } from '../../redux/actions';

const Poster = ({
  content,
  focus,
  showRating,
  borderRadius,
  removeFromWatchList,
  removeButton,
  watchListId,
}) => {
  const onRemoveClick = (event) => {
    event.preventDefault();
    removeFromWatchList(watchListId, content);
  };

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
      {removeButton && (
        <div className={`slideImg remove${focus ? ' focus' : ''}`}>
          <i className='minus square icon' onClick={onRemoveClick} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchListId: state.watchList.currentList
      ? state.watchList.currentList.id
      : '',
  };
};

export default connect(mapStateToProps, { removeFromWatchList })(Poster);
