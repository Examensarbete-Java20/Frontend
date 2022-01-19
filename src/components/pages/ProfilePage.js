import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  getWatchlist,
  createUser,
  createWatchList,
} from '../../redux/actions/index';
import '../../styles/profile.css';

const ProfilePage = ({
  user,
  isLoggedIn,
  watchLists,
  getWatchlist,
  createUser,
  createWatchList,
}) => {
  const [username, setUserName] = useState('');
  const [wList, setWList] = useState('');

  useEffect(() => {
    if (isLoggedIn) getWatchlist(user);
    console.log(isLoggedIn);
  }, [isLoggedIn, getWatchlist, user]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, username };
    console.log(newUser);
    createUser(newUser);
  };

  const onFormSubmitWatchList = (e) => {
    e.preventDefault();
    const newWatchList = { title: wList, users: [], user };
    console.log(newWatchList);
    createWatchList(newWatchList);
    setWList('');
  };

  const movieList = () => {
    if (isLoggedIn) {
      return watchLists.map((watchList) => {
        return watchList.content.map((movie) => {
          return <h1 key={movie.title}>{movie.title}</h1>;
        });
      });
    }
  };

  const watchListsLists = () => {
    if (isLoggedIn) {
      return watchLists.map((watchList) => {
        return (
          <div key={watchList.title}>
            <h2>{watchList.title}</h2>
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
          )}
        </div>
        {isLoggedIn && (
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
  createWatchList,
})(ProfilePage);
