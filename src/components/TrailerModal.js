import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, endpoint, onDismiss }) => {
  const toggleClass = show ? ' visible active' : '';
  const player = document.querySelector('#player');

  const disMissAndPause = () => {
    onDismiss();
    player.contentWindow.postMessage(
      '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
      '*'
    );
  };

  return ReactDOM.createPortal(
    <div
      onClick={disMissAndPause}
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
            onClick={disMissAndPause}
            className='times circle icon large'
            style={{
              cursor: 'pointer',
            }}
          />
        </div>
        <h1>TRAILER TIME!!</h1>
        <iframe
          id='player'
          width='900'
          height='500'
          src={`${endpoint}?version=3&enablejsapi=1`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
