import React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';

import { setUser, unsetUser, emptyWatchList } from '../redux/actions';
import '../styles/googleLogin.css';

const GoogleLoginButton = ({
  isLoggedIn,
  setUser,
  unsetUser,
  emptyWatchList,
}) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;

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

  return (
    <>
      {!isLoggedIn ? (
        <GoogleLogin
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className='btnGoogle'>
              <i className='google icon' />
              <span style={{ marginLeft: '5px' }}>Sign In with Google</span>
            </button>
          )}
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : (
        <GoogleLogout
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className='btnGoogle'>
              <i className='google icon' />
              <span style={{ marginLeft: '5px' }}>Sign out</span>
            </button>
          )}
          clientId={clientId}
          buttonText='Logout'
          onLogoutSuccess={onSuccessLogout}
        />
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
