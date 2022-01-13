import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/searchBox.css';

const SearchBox = ({
  searchResult,
  showList,
  content,
  setSearchQuery,
  contentAction,
}) => {
  const onClickHelper = (imdbId) => {
    contentAction(imdbId, content);
    setSearchQuery('');
  };

  const renderSearchOptions = () => {
    if (!searchResult.length) {
      return (
        <>
          <p className='divider' />
          <p className='listItem'>Inget hittades</p>
        </>
      );
    }

    return searchResult.map((result, index) => (
      <div className='linkRow' key={index}>
        <p className='divider' />

        <Link
          className='listItem'
          to={`/show/${content}/${result.imdb_id}`}
          onClick={() => onClickHelper(result.imdb_id)}
        >
          {result.title}
        </Link>
      </div>
    ));
  };
  return (
    <div
      className='searchList'
      style={{ display: showList ? 'block' : 'none' }}
    >
      {renderSearchOptions()}
    </div>
  );
};

export default SearchBox;
