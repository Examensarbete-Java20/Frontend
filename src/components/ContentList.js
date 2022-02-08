import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImg from '../styles/img/noimagefound.jpg';
import Rating from './Images/Rating';
import AddToWatchListButton from './AddToWatchListButton';
import '../styles/addToWatchListButton.css';

const ContentList = ({ content, type, contentAction }) => {
  return content.map((result) => (
    <div key={result.imdb_id} className='card'>
      <div className='imageWrapper'>
        <Link
          onClick={() => contentAction(result.imdb_id)}
          className='linkGrid'
          to={`/show/${type}/${result.imdb_id}`}
        >
          <img
            src={result.image_url}
            className='image'
            alt='No Img'
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = notFoundImg;
            }}
          />
          <h3 className='title'>
            {result.title}
            {result.release && ` (${result.release.substring(0, 4)})`}
          </h3>
        </Link>
      </div>
      <div className='ranking'>
        <Rating
          title='MWF'
          color='yellow'
          rating={result.ownRating}
          votes={result.totalOfVoters}
          showVotes
        />
      </div>

      <div className='addToWatchListButton'>
        <AddToWatchListButton type={type} content={result} />
      </div>
    </div>
  ));
};

export default ContentList;
