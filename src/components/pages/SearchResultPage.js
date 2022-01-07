import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as helper from '../helpers/resultHelper';
import SearchResultList from '../SearchResultList';

const SearchResultPage = ({ searchTitle }) => {
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState('');
  console.log(searchTitle);
  console.log(title);
  console.log(result);

  useEffect(() => {
    setTitle(
      searchTitle ? searchTitle : window.location.pathname.replace('/find/', '')
    );
  }, [searchTitle]);

  return (
    <div>
      <div>
        <SearchResultList
          title={`Movie result for: ${title}`}
          search={title}
          type='movie'
          content={result[0]}
        />
        <SearchResultList
          title={`Series result for: ${title}`}
          search={title}
          type='series'
          content={result[1]}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { searchTitle: state.searchTerm };
};

export default connect(mapStateToProps)(SearchResultPage);
