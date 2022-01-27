import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addToWatchList, removeFromWatchList } from '../redux/actions/index';
import '../styles/addToWatchListButton.css';

const AddToWatchListButton = ({
  watchLists,
  isLoggedIn,
  type,
  content,
  addToWatchList,
  removeFromWatchList,
}) => {
  const [openButton, setOpenButton] = useState(false);

  const handleToggle = (e) => {
    setOpenButton(!openButton);
  };

  const clickToAddWatchList = (watchList) => {
    addToWatchList(type, watchList.id, content);
    console.log('content added');
  };

  const clickToRemoveWatchList = (watchList) => {
    removeFromWatchList(watchList.id, content);
    console.log('content removed');
  };

  const checkIfContentExist = (list) => {
    for (let index = 0; index < list.length; index++) {
      if (content.id === list[index].id) {
        return true;
      }
    }
    return false;
  };

  const watchList = () => {
    return watchLists
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((watchList) => {
        return (
          <div key={watchList.title} className='mouseOnList'>
            <div value={watchList.title}>{watchList.title.slice(0, 15)}</div>
            {checkIfContentExist(watchList.content) ? (
              <button
                className='updateWatchListButton'
                onClick={() => {
                  clickToRemoveWatchList(watchList);
                }}
              >
                -
              </button>
            ) : (
              <button
                className='updateWatchListButton'
                onClick={() => {
                  clickToAddWatchList(watchList);
                }}
              >
                +
              </button>
            )}
          </div>
        );
      });
  };

  return (
    <div>
      {isLoggedIn && (
        <div className='hamButton'>
          <div className={`watchListPanel ${!openButton ? ' hide' : ''}`}>
            <div className='testing'>{watchList()} </div>
          </div>
          <i
            className='bookmark icon big bookMarkIcon'
            onClick={(e) => handleToggle(e)}
          >
            <div className='plusIcon'>
              <i className='add icon tiny  plusSign'></i>
            </div>
          </i>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchLists: state.watchList.watchLists,
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, {
  addToWatchList,
  removeFromWatchList,
})(AddToWatchListButton);
