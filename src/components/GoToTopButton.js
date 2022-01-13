import React from 'react';

import '../styles/goToTopButton.css';

const GoTop = (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.onClick}>
        <button className='goTop far fa-angle-double-up'>
          <span style={{ margin: '40px 2px 20px 0px' }}>
            <i className='angle double up icon'></i>
          </span>
        </button>
      </div>
    </>
  );
};
export default GoTop;
