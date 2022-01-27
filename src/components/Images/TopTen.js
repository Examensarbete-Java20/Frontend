import React, { useState, useEffect } from 'react';

import '../../styles/topTen.css';
import ImageSlider from './ImageSlider';
import { getTopTen } from '../helpers/contentHelper';

const TopTen = ({ type, title }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getTopTen(type).then((data) => setResults(data));
  }, [type]);

  return (
    <div className='contentContainer'>
      <h1 className='topTitle'>{title}</h1>
      {results && <ImageSlider content={results} type={type} topTen />}
    </div>
  );
};

export default TopTen;
