import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getSingleWatchlist } from '../../redux/actions';
import ImageSlider from '../Images/ImageSlider';
import '../../styles/watchlist.css';
import ShowAllImg from '../Images/ShowAllImg';

const WatchlistPage = ({
  user,
  getSingleWatchlist,
  currentList,
  isLoggedIn,
}) => {
  const params = useParams();
  const [list, setList] = useState('');
  const [showList, setShowList] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
    console.log('hej');
  }, [isLoggedIn, , user, navigate]);

  useEffect(() => {
    if (currentList) setList(currentList);
    else getSingleWatchlist(params.id);
  }, [getSingleWatchlist, user, currentList, params]);

  return (
    <div className='contentContainer'>
      {list && (
        <div className='watchListInformation'>
          <div className='listTitle'>{list.title}</div>
          {list.content.length && list.content.length > 5 ? (
            <div className='viewMoreStuff'>
              <div className=''>
                <i
                  className={`${
                    showList ? 'compress' : 'expand'
                  } icon pinkIcon`}
                  onClick={() => setShowList(!showList)}
                />
              </div>
            </div>
          ) : (
            ''
          )}
          {!showList && list.content.length > 5 ? (
            <ImageSlider content={list.content} watchlist />
          ) : (
            <ShowAllImg content={list.content} />
          )}
          <div className='listTotal'>
            {list.content.length ? `Total: ${list.content.length}` : ''}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    watchLists: state.watchList.watchLists,
    currentList: state.watchList.currentList,
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, {
  getSingleWatchlist,
})(WatchlistPage);
