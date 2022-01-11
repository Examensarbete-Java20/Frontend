import { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { setUser, unsetUser } from "../redux/actions";
import { connect } from 'react-redux';
import { useStore } from "react-redux";

import '../styles/googleLogin.css'


function GoogleLoginButton() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const store = useStore();
  const clientId = process.env.REACT_APP_CLIENT_ID

  const onSuccessLogin = (resp) => {
    store.dispatch(setUser(resp.profileObj));
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
    <div>
      {!isLoggedIn ? (
        <GoogleLogin render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="login-btn"
          >
            This is my custom Google button
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