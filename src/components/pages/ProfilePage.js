import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getWatchlist, createUser } from '../../redux/actions/index';
import '../../styles/profile.css';

const ProfilePage = ({
  user,
  isLoggedIn,
  watchLists,
  getWatchlist,
  createUser,
}) => {
  const [username, setUserName] = useState('');

  useEffect(() => {
    if (isLoggedIn) getWatchlist(user);
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(watchLists);
  }, [watchLists]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, username };
    console.log(newUser);
    createUser(newUser);
  };

  const movieList = () => {
    if (isLoggedIn) {
      return watchLists.map((watchList) => {
        return watchList.movies.map((movie) => {
          return <h1 key={movie.title}>{movie.title}</h1>;
        });
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
            <div className='testing'>
              <h2>Enter a username to create an account</h2>
              <form className='userInput' onSubmit={onFormSubmit}>
                <label>Username: </label>
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

          <div>{isLoggedIn && watchLists && movieList()}</div>
        </div>
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

export default connect(mapStateToProps, { getWatchlist, createUser })(
  ProfilePage
);
