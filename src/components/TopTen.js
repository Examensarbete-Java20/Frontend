import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/topTen.css';
import { getTopTen } from './helpers/contentHelper';
import Rating from './Rating';

const TopTen = ({ type, title, contentAction }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getTopTen(type).then((data) => setResults(data));
  }, [type]);

  return (
    <div className='contentContainer'>
      <h1 className='topTitle'>{title}</h1>
      {results.map((result) => (
        <div key={result.id} className='card'>
          <div className='imageWrapper'>
            <Link
              onClick={() => contentAction(result.imdb_id)}
              className='linkGrid'
              to={`/show/${type}/${result.imdb_id}`}
            >
              <img src={result.image_url} className='image' alt='No Image' />
              <h3 className='title'>
                {result.title} ({result.release.substring(0, 4)})
              </h3>
            </Link>
          </div>
          <div className='ranking'>
            {/* <Rating title="IMDB" color="yellow" rating={result.rating} /> */}
            <Rating
              title='PEDB'
              color='yellow'
              rating={result.ownRating}
              votes={result.totalOfVoters}
              showVotes
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTen;
