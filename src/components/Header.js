import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/pedb.png';
import '../styles/header.css';

import * as helper from '../helpers/header';

const Header = () => {
  const [searchResult, setSearchResult] = useState([{ title: 'Nothing here' }]);
  const [content, setContent] = useState('Movies');
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchResult);

  const inputHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    helper.getMovieTitle(searchQuery).then((data) => setSearchResult(data));
  };

  return (
    <div className='header'>
      <div style={{ paddingTop: '0.25rem' }}>
        <Link to='/'>
          <img src={logo} alt='PEDB' height={41} />
        </Link>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='ui action input header-input'>
          <input
            type='text'
            placeholder='Butman...'
            value={searchQuery}
            onChange={(e) => inputHandler(e)}
          />
          <select
            className='ui compact selection dropdown'
            onChange={(e) => setContent(e.target.value)}
          >
            <option value='Movies'>Filmer</option>
            <option value='Series'>Serier</option>
          </select>
          <div
            className='ui icon button'
            style={{ height: '38px' }}
            onClick={onSubmit}
          >
            <i className='search icon' />
          </div>
        </div>
      </form>
      <div style={{ paddingTop: '0.25rem' }}>
        <button className='ui google plus button'>
          <i className='google icon'></i>
          Logga in
        </button>
      </div>
    </div>
  );
};

export default Header;
