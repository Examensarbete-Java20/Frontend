import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import SearchResultList from '../SearchResultList';
import { contentAction } from '../../redux/actions';

const SearchResultPage = ({ searchTitle, contentAction }) => {
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
          contentAction={contentAction}
        />
        <SearchResultList
          title={`Series result for: ${title}`}
          search={title}
          type='series'
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
