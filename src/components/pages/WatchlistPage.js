import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  removeFromWatchList,
  getSingleWatchlist,
} from '../../redux/actions/index';
import '../../styles/watchlist.css';

const WatchlistPage = ({
  user,
  getSingleWatchlist,
  removeFromWatchList,
  currentList,
}) => {
  const params = useParams();
  const [list, setList] = useState('');

  useEffect(() => {
    if (currentList) setList(currentList);
    else getSingleWatchlist(params.id);
  }, [getSingleWatchlist, user, currentList, params]);

  const watchListsLists = () => {
    return (
      list && (
        <div key={list.title}>
          <h1>{list.title}</h1>
          <div>{movieList()}</div>
        </div>
      )
    );
  };

  const movieList = () => {
    return list.content.map((movie) => {
      return (
        <h2 key={movie.title}>
          {movie.title}
          <button
            className='ui icon button small'
            onClick={() => {
              removeFromWatchList(currentList.id, movie);
            }}
          >
            x
          </button>
        </h2>
      );
    });
  };

  return (
    <div className='watchListContainer'>
      <div className='watchListInformation'>
        <div>
          <h1>{watchListsLists()}</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    watchLists: state.watchList.watchLists,
    currentList: state.watchList.currentList,
  };
};

export default connect(mapStateToProps, {
  removeFromWatchList,
  getSingleWatchlist,
})(WatchlistPage);
