import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, onDismiss, children }) => {
  const toggleClass = show ? ' visible active' : '';

  return ReactDOM.createPortal(
    <div
      onClick={onDismiss}
      className={`ui dimmer modals${toggleClass}`}
      // style={{ background: 'rgba(0, 0, 0, 0.96)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`ui standard modal${toggleClass}`}
        style={{
          textAlign: 'center',
          marginTop: '0.5rem',
          marginBottom: '0.5',
          background: 'black',
          color: 'red',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            marginTop: '-10px',
            marginRight: '-15px',
            marginBottom: '-25px',
            textAlign: 'end',
          }}
        >
          <i
            onClick={onDismiss}
            className='times circle icon large'
            style={{
              cursor: 'pointer',
            }}
          />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
