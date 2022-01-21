import React, {useState} from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import useWindowSize from '../hooks/useWindowSize';
import {IconContext} from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
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
  const {width} = useWindowSize();
  const [sidebar, setSidebar] = useState(false)

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

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      {!isLoggedIn ? (
        <GoogleLogin
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className='btnGoogle'>
              <i className='google icon' />
              <span style={{ marginLeft: '5px' }}>{width>678 ? 'Sign In with Google': null}</span>
            </button>
          )}
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        >
          
        </GoogleLogin>
      ) : (
        <IconContext.Provider value={{color: 'black'}}>
            
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
                <GoogleLogout
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className='btnGoogleLogout googleText'>
            <AiIcons.AiOutlineGoogle/>
            <span style={{ marginLeft: '2px' }}> Logout</span>
          </button>
        )}
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccessLogout}
      />
            </ul>
        </nav>
    </IconContext.Provider>
       
        
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
