import React from 'react';

import '../styles/profile.css';

export const ErrorTxt = ({ type }) => {
  return (
    <div>
      {type === 'input' ? (
        <p className='errorTxt'>* Letters and no blank spaces *</p>
      ) : type === 'alreadyExist' ? (
        <p className='errorTxtWatchlistExist'>* Watchlist already exist *</p>
      ) : (
        ''
      )}
    </div>
  );
};
