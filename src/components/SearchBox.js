import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/searchBox.css';

const SearchBox = ({ searchResult, showList, content, setSearchQuery }) => {
  const onClickHelper = (event) => {
    event.preventDefault();
    setSearchQuery('');
  };

  const renderSearchOptions = () => {
    if (!searchResult.length) {
      return <p className='listItem'>Inget hittades</p>;
    }

    return searchResult.map((result, index) => (
      <div className='linkRow'>
        <div className='listItem' onClick={(e) => onClickHelper(e)}>
          <Link
            className='linkItem'
            key={result.id}
            to={`/${content}/${result.imdb_id}`}
          >
            {result.title}
          </Link>
        </div>
        {index === searchResult.length - 1 ? '' : <p className='divider' />}
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
