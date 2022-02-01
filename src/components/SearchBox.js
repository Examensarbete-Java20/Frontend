import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/searchBox.css';
import { ErrorTxt } from './ErrorTxt';
import { validateInput } from './helpers/valdiateHelper';

const SearchBox = ({
  searchResult,
  showList,
  content,
  searchQuery,
  setSearchQuery,
  contentAction,
}) => {
  const emptyInputMessage = (
    <p className='listItem'>
      Found nothing{searchQuery ? ` on ${searchQuery}` : ''}
    </p>
  );

  useEffect(() => {}, [searchQuery]);

  const onClickHelper = (imdbId) => {
    contentAction(imdbId, content);
    setSearchQuery('');
  };
  const renderSearchOptions = () => {
    if (!searchResult.length) {
      return (
        <>
          <p className='divider' />
          {!searchQuery ? (
            emptyInputMessage
          ) : !validateInput(searchQuery) ? (
            <ErrorTxt type='notValidHeaderInput' />
          ) : (
            emptyInputMessage
          )}
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
