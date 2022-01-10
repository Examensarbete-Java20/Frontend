import React, { Component } from "react";
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import '../styles/googleLogin.css';

class GoogleLoginComponent extends Component{
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            userInfo: {
                name: "",
                emailId: "",
            },
        };
    }

    clientId = process.env.REACT_APP_CLIENT_ID

    responseGoogleSuccess = (response) => {
        let userInfo = {
            name: response.profileObj.name,
            emailId: response.profileObj.email,
        };
        this.setState({userInfo, isLoggedIn: true});
    };

    responseGoogleError = (response) => {
        console.log(response)
    };

    logout = (response) => {
        console.log(response)
        let userInfo = {
            name: "",
            emailId: "",
        };
        this.setState({userInfo, isLoggedIn: false});
    };

    render() {
        return(
                <div className="login-div">
                    <div><h5 className="login-text-style">{this.state.userInfo.name}</h5></div>
                    <div>
                    {this.state.isLoggedIn ? (
                        <div>
                            

                            <GoogleLogout
                                clientId={this.clientId}
                                buttonText={"Logout"}
                                onLogoutSuccess={this.logout}
                            />
                        </div>
                    ) : (
                            <GoogleLogin
                                clientId={this.clientId}
                                buttonText="Login"
                                onSuccess={this.responseGoogleSuccess}
                                onFailure={this.responseGoogleError}
                                isSignedIn={true}
                                cookiePolicy={'single_host_origin'}
                            />
                        )}
                    </div>
                </div>
        );
    }
}

export default GoogleLoginComponent;
