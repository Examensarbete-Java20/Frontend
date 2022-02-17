import React, { useState, useRef } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';
import '../styles/navbar.css';

import {
  setUser,
  unsetUser,
  emptyWatchList,
  getWatchlist,
} from '../redux/actions';
import '../styles/googleLogin.css';
import useShowRef from '../hooks/useShowRef';

const GoogleLoginButton = ({
  isLoggedIn,
  setUser,
  unsetUser,
  emptyWatchList,
  getWatchlist,
}) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const { width } = useWindowSize();
  const [sidebar, setSidebar] = useState(false);

  const dropDown = useRef();

  useShowRef(dropDown, () => setSidebar(false));

  const onSuccessLogin = (resp) => {
    setUser(resp);
    setTimeout(() => {
      getWatchlist(resp.profileObj);
    }, 400);
  };

  const onFailureLogin = (resp) => {
    console.log('Response: ', { resp });
  };

  const onSuccessLogout = () => {
    unsetUser();
    emptyWatchList();
  };

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <>
      {!isLoggedIn ? (
        <GoogleLogin
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className='btnGoogle'>
              <i className='google icon' />
              <span style={{ marginLeft: '5px' }}>
                {width > 678 ? 'Sign In with Google' : null}
              </span>
            </button>
          )}
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        ></GoogleLogin>
      ) : (
        <div ref={dropDown}>
          <div id='clickbox' className='menu-bars'>
            <i className='bars icon' onClick={showSidebar} />
          </div>
          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-menu-items'>
              <div className='nav-text'>
                <Link to='/' className='nav-text' onClick={closeSidebar}>
                  <i className='home icon' />
                  <span>Home</span>
                </Link>
              </div>

              <div className='nav-text'>
                <Link to='/user' className='nav-text' onClick={closeSidebar}>
                  <i className='user circle outline icon' />
                  <span>Profile</span>
                </Link>
              </div>

              <GoogleLogout
                render={(renderProps) => (
                  <div className='nav-text'>
                    <div
                      href='#'
                      onClick={() => {
                        renderProps.onClick();
                        closeSidebar();
                      }}
                      className='nav-text'
                    >
                      <i className='google icon' />
                      <span> Logout</span>
                    </div>
                  </div>
                )}
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccessLogout}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps, {
  setUser,
  unsetUser,
  emptyWatchList,
  getWatchlist,
})(GoogleLoginButton);
