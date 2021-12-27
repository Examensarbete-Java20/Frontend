import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../styles/img/pedb.png';
import '../styles/header.css';

import { search } from '../redux/actions';
import * as helper from './helpers/header';
import SearchBox from './SearchBox';

const Header = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [content, setContent] = useState('movie');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [debounceQuery, setDebounceQuery] = useState(searchQuery);
  let navigate = useNavigate();

  const inputHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      if (event.target.children[1]) {
        event.target.children[0].children[0].blur();
      }
      props.search(searchQuery);
      navigate(`/find/${searchQuery}`);
      setSearchQuery('');
      setSearchResult([]);
    }
  };

  useEffect(() => {
    if (searchQuery || !searchQuery) {
      const timerId = setTimeout(() => {
        setDebounceQuery(searchQuery);
      }, 250);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!debounceQuery) setSearchResult([]);
    else
      helper
        .getTitles(debounceQuery, content)
        .then((data) => setSearchResult(data));
  }, [debounceQuery, content]);

  const onFocusHandler = () => {
    if (!searchQuery) {
      setSearchResult([]);
    }
    setShowSearchResult(true);
  };

  // TODO: Fixa en bättre funktionalitet för att stänga ner sök rutan
  const onBlurHelper = () => {
    setTimeout(() => {
      setShowSearchResult(false);
    }, 200);
  };

  return (
    <div className='header'>
      <div style={{ paddingTop: '0.3rem' }} className='header-div'>
        <Link to='/'>
          <img className='header-img' src={logo} alt='PEDB' height={41} />
        </Link>
      </div>
      <form className='header-div' onSubmit={(e) => onSubmit(e)}>
        <div className='ui action input header-input'>
          <input
            list='search'
            type='text'
            placeholder='Butman...'
            value={searchQuery}
            onChange={(e) => inputHandler(e)}
            onFocus={() => onFocusHandler()}
            onBlur={() => onBlurHelper()}
          />

          <select
            className='ui compact selection dropdown'
            onChange={(e) => setContent(e.target.value)}
          >
            <option value='movie'>Filmer</option>
            <option value='series'>Serier</option>
          </select>
          <div
            className='ui icon button'
            style={{ height: '38px' }}
            onClick={onSubmit}
          >
            <i className='search icon' />
          </div>
        </div>
        <SearchBox
          searchResult={searchResult}
          showList={showSearchResult}
          content={content}
          setSearchQuery={setSearchQuery}
        />
      </form>
      <div className='header-div'>
        <button className='ui google plus button'>
          <i className='google icon'></i>
          Logga in
        </button>
      </div>
    </div>
  );
};

export default connect(null, { search })(Header);
