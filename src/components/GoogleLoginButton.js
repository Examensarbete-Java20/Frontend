import React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';

import { setUser, unsetUser } from '../redux/actions';
import '../styles/googleLogin.css';

const GoogleLoginButton = ({ isLoggedIn, setUser, unsetUser }) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const onSuccessLogin = (resp) => {
    console.log(resp.profileObj);
    setUser(resp.profileObj);
  };

  const onFailureLogin = (resp) => {
    alert({ resp });
    console.log('Response: ', { resp });
  };

  const onSuccessLogout = () => {
    unsetUser();
  };

  return (
    <div className='login-div'>
      {!isLoggedIn ? (
        <GoogleLogin
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className='btnGoogle'>
              <i className='google plus icon'>
                <i
                  className='fa fa-google-plus'
                  style={{ marginLeft: '5px' }}
                />{' '}
              </i>
              <span>&nbsp;&nbsp;Sign In with Google</span>
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
              <i className='google plus icon'>
                <i
                  className='fa fa-google-plus'
                  style={{ marginLeft: '5px' }}
                />{' '}
              </i>
              <span>&nbsp;&nbsp;Sign out</span>
            </button>
          )}
          clientId={clientId}
          buttonText='Logout'
          onLogoutSuccess={onSuccessLogout}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps, { setUser, unsetUser })(
  GoogleLoginButton
);
