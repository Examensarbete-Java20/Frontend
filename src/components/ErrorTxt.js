import React from 'react';

import '../styles/profile.css';

export const ErrorTxt = ({ type }) => {
  return (
    <div>
      {type === 'input' ? (
        <p className='errorTxt'>
          * No special characters or blank<br></br> spaces and mst contain
          letters*
        </p>
      ) : type === 'alreadyExist' ? (
        <p className='errorTxtWatchlistExist'>* Watchlist already exist *</p>
      ) : type === 'newWatchList' || type === 'notValidHeaderInput' ? (
        <p className='errorTxt2'>* No special characters *</p>
      ) : (
        ''
      )}
    </div>
  );
};
