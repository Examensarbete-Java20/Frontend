import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as helper from '../helpers/resultHelper';
import SearchResultList from '../SearchResultList';
import { contentAction } from '../../redux/actions';

const SearchResultPage = ({ searchTitle, contentAction }) => {
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState('');

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
          contentAction={contentAction}
        />
        <SearchResultList
          title={`Series result for: ${title}`}
          search={title}
          type='series'
          content={result[1]}
          contentAction={contentAction}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { searchTitle: state.searchTerm };
};

export default connect(mapStateToProps, { contentAction })(SearchResultPage);
