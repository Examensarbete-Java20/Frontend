import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { setUser, unsetUser } from "../redux/actions";
import { connect, useStore } from 'react-redux';

import '../styles/googleLogin.css'


function GoogleLoginButton() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const store = useStore();
  const clientId = process.env.REACT_APP_CLIENT_ID

  const onSuccessLogin = (resp) => {
    store.dispatch(setUser(resp.profileObj));
    console.log(resp.profileObj)
    setIsLoggedIn(true);
  };

  const onFailureLogin = (resp) => {
    alert({resp})
    console.log("Response: ", { resp });
  };

  const onSuccessLogout = () => {
    store.dispatch(unsetUser());
    setIsLoggedIn(false);
  };

  return (
    <div className="login-div">
      {!isLoggedIn ? (
        <GoogleLogin 
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btnGoogle"
          >
            <i className="google plus icon">
            <i className="fa fa-google-plus" style={{ marginLeft: 
            '5px' }}/> </i>
            <span>&nbsp;&nbsp;Sign In with Google</span> 
          </button>
        )}
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <GoogleLogout
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btnGoogle"
          >
            <i className="google plus icon">
            <i className="fa fa-google-plus" style={{ marginLeft: 
            '5px' }}/> </i>
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
}

const mapStateToProps = (state) => {
    return { user: state.user };
  };

export default connect(mapStateToProps, { setUser, unsetUser }) (GoogleLoginButton);