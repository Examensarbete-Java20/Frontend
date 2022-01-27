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
  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) getWatchlist(user);
    else navigate('/');
    console.log('hej');
  }, [isLoggedIn, getWatchlist, user, navigate]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, username };
    createUser(newUser);
  };

  const whenClickWatchList = (index) => {
    setCurrentWatchList(watchLists[index]);
  };

  const onFormSubmitWatchList = (e) => {
    e.preventDefault();
    const newWatchList = { title: wList, users: [], user };
    createWatchList(newWatchList);
    setWList('');
  };

  const onFormChangeUsername = (e) => {
    e.preventDefault();
    changeUsername(user.googleId, username);
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
              </div>
            </div>
          )}
        </div>
        {isLoggedIn && user.username && (
          <div className='listOfWatchLists'>
            <h1>Watchlists</h1>
            <h2>{watchLists && watchListsLists()}</h2>
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
