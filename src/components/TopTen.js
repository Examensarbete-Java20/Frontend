import React, { useState, useEffect } from 'react';

import '../styles/topTen.css';
import ContentList from './ContentList';
import ImageSlider from './ImageSlider';
import { getTopTen } from './helpers/contentHelper';

const TopTen = ({ type, title, contentAction }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getTopTen(type).then((data) => setResults(data));
  }, [type]);

  return (
    <div className='contentContainer'>
      <h1 className='topTitle'>{title}</h1>
      {results && (
        <ImageSlider
          content={results}
          type={type}
          contentAction={contentAction}
        />
      )}
      {/* {results && (
        <ContentList
          content={results}
          type={type}
          contentAction={contentAction}
        />
      )} */}
    </div>
  );
};

export default TopTen;
