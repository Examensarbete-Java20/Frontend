import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as helper from './helpers/result';
import SearchResultList from './SearchResultList';

const SearchResultPage = (props) => {
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState('');
  console.log(props);
  console.log(title);
  console.log(result);

  useEffect(() => {
    setTitle(
      props.title ? props.title : window.location.pathname.replace('/find/', '')
    );
  }, [props.title]);

  useEffect(() => {
    const temp = helper.searchResult(title);
    if (temp) {
      temp.then((data) => setResult(data));
    }
  }, [title]);

  return (
    <div>
      Resultat från söket: <h1>{title}</h1>
      <h2>Filmer</h2>
      <SearchResultList />
      <h2>Serier</h2>
      <SearchResultList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { title: state.searchTerm };
};

export default connect(mapStateToProps)(SearchResultPage);
