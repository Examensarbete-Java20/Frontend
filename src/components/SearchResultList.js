import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { searchResult } from '../api/request';
import Rating from './Rating';

const SearchResultList = ({ title, search, contentAction, type }) => {
  const [rendred, setRendred] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (search) {
      setRendred(<div>LOADING..</div>);
      setCounter(5);
      searchResult(type, search, 0).then((data) => {
        setRendred(renderResult(data));
      });
    }
  }, [search]);

  const readMoreHandler = () => {
    setCounter(counter + 5);
    searchResult(type, search, counter).then((data) => {
      const array = [];

      rendred.forEach((element) => {
        array.push(element);
      });

      renderResult(data).forEach((element) => {
        array.push(element);
      });
      setRendred(array);
    });
  };

  const renderResult = (content) => {
    return content.map((result) => (
      <div key={result.imdb_id} className='card'>
        <div className='imageWrapper'>
          <Link
            onClick={() => contentAction(result.imdb_id)}
            className='linkGrid'
            to={`/show/${type}/${result.imdb_id}`}
          >
            <img src={result.image_url} className='image' alt='No Image' />
            <h3 className='title'>
              {result.title} ({result.release && result.release.substring(0, 4)}
              )
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
    ));
  };

  return (
    <div className='contentContainer'>
      <h1 className='topTitle'>{title}</h1>
      {rendred}
      <div className='viewMore'>
        <i
          className='arrow down icon viewMoreButton'
          onClick={readMoreHandler}
        ></i>
      </div>
    </div>
  );
};

export default SearchResultList;
