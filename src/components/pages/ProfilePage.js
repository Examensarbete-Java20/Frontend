import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  getWatchlist,
  createUser,
  changeUsername,
  createWatchList,
  setCurrentWatchList,
} from '../../redux/actions/index';
import '../../styles/profile.css';
import { validateInput, validateWatchList } from '../helpers/valdiateHelper';
import { ErrorTxt } from '../ErrorTxt';

const ProfilePage = ({
  user,
  isLoggedIn,
  watchLists,
  getWatchlist,
  createUser,
  changeUsername,
  setCurrentWatchList,
  createWatchList,
}) => {
  const [username, setUserName] = useState('');
  const [wList, setWList] = useState('');
  const [isUserNameValid, setIsUsernameValid] = useState('');
  const [isWatchListValid, setIsWatchListValid] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) getWatchlist(user);
    else if (!localStorage.getItem('token')) navigate('/');
  }, [isLoggedIn, getWatchlist, user, navigate]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, username };

    if (validateInput(username)) {
      createUser(newUser);
      setIsUsernameValid('');
    } else setIsUsernameValid('input');
    setUserName('');
  };

  const whenClickWatchList = (index) => {
    setCurrentWatchList(watchLists[index]);
  };

  const onFormSubmitWatchList = (e) => {
    e.preventDefault();
    if (!validateInput(wList)) {
      setIsWatchListValid('input');
    } else if (!validateWatchList(wList, watchLists)) {
      setIsWatchListValid('alreadyExist');
    } else {
      const newWatchList = { title: wList, user: { googleId: user.googleId } };
      createWatchList(newWatchList);
      setIsWatchListValid('');
    }

    setWList('');
  };

  const onFormChangeUsername = (e) => {
    e.preventDefault();
    if (validateInput(username)) {
      setIsUsernameValid('');
      changeUsername(user.googleId, username);
    } else setIsUsernameValid('input');
    setUserName('');
  };

  const watchListsLists = () => {
    if (isLoggedIn) {
      return watchLists.map((watchList, index) => {
        return (
          <div key={watchList.title}>
            <Link
              className='linkGrid'
              to={`/watchlist/${watchList.id}`}
              onClick={() => whenClickWatchList(index)}
            >
              <h2>{watchList.title.slice(0, 15)}</h2>
            </Link>
          </div>
        );
      });
    }
  };

  return (
    <div className='profileContainer'>
      <div className='userInformation'>
        <div className='userUtilities'>
          <h2 className='userName'>
            {user.username ? user.username : user.email}
          </h2>
          <img
            className='profileImage'
            src='https://st2.depositphotos.com/1531183/5770/v/950/depositphotos_57709697-stock-illustration-male-person-silhouette-profile-picture.jpg'
            alt='hej'
          />
        </div>
        <div>
          {isLoggedIn && !user.username && (
            <div className='userInput'>
              <h2 className='inputHeader'>Create an account</h2>
              <form onSubmit={onFormSubmit}>
                <input
                  type='text'
                  placeholder='Enter your username'
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
                <button
                  className='ui icon button small submitButton'
                  onClick={onFormSubmit}
                >
                  ok
                </button>
              </form>
              {isUserNameValid && <ErrorTxt type={isUserNameValid} />}
            </div>
          )}
          {isLoggedIn && user.username && (
            <div className='userInput'>
              <div className='forms'>
                <h2 className='inputHeader'>Create a watchlist</h2>
                <form onSubmit={onFormSubmitWatchList}>
                  <input
                    type='text'
                    placeholder='Name your watchlist'
                    value={wList}
                    onChange={(e) => setWList(e.target.value)}
                  ></input>
                  <button
                    className='ui icon button small submitButton'
                    onClick={onFormSubmitWatchList}
                  >
                    ok
                  </button>
                </form>
                {isWatchListValid && <ErrorTxt type={isWatchListValid} />}
              </div>
              <div>
                <h2 className='inputHeader'>Change username</h2>
                <form onSubmit={onFormChangeUsername}>
                  <input
                    type='text'
                    placeholder='Change username'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                  <button
                    className='ui icon button small submitButton'
                    onClick={onFormChangeUsername}
                  >
                    ok
                  </button>
                </form>
                {isUserNameValid && <ErrorTxt type={isUserNameValid} />}
              </div>
            </div>
          )}
        </div>
        {isLoggedIn && user.username && (
          <div className='listOfWatchLists'>
            <h1>Watchlists</h1>
            <div>{watchLists && watchListsLists()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    currentList: state.watchList.currentList,
    invitedList: state.watchList.invited,
    watchLists: state.watchList.watchLists,
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, {
  getWatchlist,
  createUser,
  changeUsername,
  createWatchList,
  setCurrentWatchList,
})(ProfilePage);
