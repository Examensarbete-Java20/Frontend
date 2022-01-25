import React, { useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';
import { SidebarData } from './SidebarData';
import '../styles/navbar.css';

import { setUser, unsetUser, emptyWatchList } from '../redux/actions';
import '../styles/googleLogin.css';

const GoogleLoginButton = ({
  isLoggedIn,
  setUser,
  unsetUser,
  emptyWatchList,
}) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const { width } = useWindowSize();
  const [sidebar, setSidebar] = useState(false);

  const onSuccessLogin = (resp) => {
    setUser(resp);
  };

  const onFailureLogin = (resp) => {
    console.log('Response: ', { resp });
  };

  const onSuccessLogout = () => {
    unsetUser();
    emptyWatchList();
  };

  const showSidebar = () => setSidebar(!sidebar);

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
        <div>
          <div style={{ color: 'black' }} className='menu-bars'>
            <i className='bars icon' onClick={showSidebar} />
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-menu-items' onClick={showSidebar}>
              <div className='nav-text'>
                <Link to='/' className='nav-text'>
                  <i className='home icon' />
                  <span>Home</span>
                </Link>
              </div>

              <div className='nav-text'>
                <Link to='/user'>
                  <i className='user circle outline icon' />
                  <span>Profile</span>
                </Link>
              </div>

              <GoogleLogout
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className='btnGoogleLogout googleText'
                  >
                    <i className='google icon' />
                    <span style={{ marginLeft: '2px' }}> Logout</span>
                  </button>
                )}
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccessLogout}
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps, { setUser, unsetUser, emptyWatchList })(
  GoogleLoginButton
);
