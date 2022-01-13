import React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';

import { setUser, unsetUser } from '../redux/actions';
import '../styles/googleLogin.css';

const GoogleLoginButton = ({ isLoggedIn, setUser, unsetUser }) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const onSuccessLogin = (resp) => {
    setUser(resp.profileObj);
  };

  const onFailureLogin = (resp) => {
    console.log('Response: ', { resp });
  };

  const onSuccessLogout = () => {
    unsetUser();
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
  return { user: state.user, isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps, { setUser, unsetUser })(
  GoogleLoginButton
);
