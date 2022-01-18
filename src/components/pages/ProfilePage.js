import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getWatchlist } from '../../redux/actions/index';
import '../../styles/profile.css';

const ProfilePage = ({
  user,
  isLoggedIn,
  watchLists,
  getWatchlist,
  contentAction,
}) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (isLoggedIn) getWatchlist(user);
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(watchLists);
  }, [watchLists]);

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
        <div className='userName'>
          <h2>{user.email}</h2>
          <img
            className='profileImage'
            src='https://st2.depositphotos.com/1531183/5770/v/950/depositphotos_57709697-stock-illustration-male-person-silhouette-profile-picture.jpg'
            alt='hej'
          />
        </div>
        <div>
          {isLoggedIn && !user.username && (
            <form className='userInput'>
              <label>Username: </label>
              <input
                type='text'
                placeholder='Enter your username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </form>
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

export default connect(mapStateToProps, { getWatchlist })(ProfilePage);
