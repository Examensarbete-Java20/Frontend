import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/pedb.png';
import background from '../img/header.jpg';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${background})` }}>
      <div style={{ paddingTop: '0.25rem' }}>
        <Link to='/'>
          <img src={logo} height={41} />
        </Link>
      </div>
      <div>
        <div className='ui action input header-input'>
          <input type='text' placeholder='Butman...' />
          <select className='ui compact selection dropdown'>
            <option value='Movies'>Filmer</option>
            <option value='Series'>Serier</option>
          </select>
          <div className='ui icon button' style={{ height: '38px' }}>
            <i className='search icon' />
          </div>
        </div>
      </div>
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
