import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { searchResult } from '../api/request';
import ContentList from './ContentList';
import Rating from './Rating';

const SearchResultList = ({ title, search, contentAction, type }) => {
  const [content, setContent] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (search) {
      setContent(<div>LOADING..</div>);
      setCounter(5);
      searchResult(type, search, 0).then((data) => {
        setContent(data);
      });
    }
  }, [search]);

  const readMoreHandler = () => {
    setCounter(counter + 5);
    searchResult(type, search, counter).then((data) => {
      const array = [];

      content.forEach((element) => {
        array.push(element);
      });

      data.forEach((element) => {
        array.push(element);
      });
      setContent(array);
    });
  };

  const renderResult = () => {
    if (Array.isArray(content) && content.length) {
      return (
        <ContentList
          content={content}
          type={type}
          contentAction={contentAction}
        />
      );
    } else {
      return content;
    }
  };

  return (
    <div className='contentContainer'>
      <h1 className='topTitle'>{title}</h1>
      {renderResult()}
      {content.length == counter && (
        <div className='viewMore'>
          <i
            className='arrow down icon viewMoreButton'
            onClick={readMoreHandler}
          ></i>
        </div>
      )}
    </div>
  );
};

export default SearchResultList;
