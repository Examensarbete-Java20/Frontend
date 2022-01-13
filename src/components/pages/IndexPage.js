import React from 'react';
import { connect } from 'react-redux';

import TopTen from '../TopTen';
import { contentAction } from '../../redux/actions';

const IndexPage = ({ contentAction }) => {
  return (
    <div>
      <TopTen
        type='movie'
        title='Top Ten Movies'
        contentAction={contentAction}
      />
      <TopTen
        type='series'
        title='Top Ten Series'
        contentAction={contentAction}
      />
    </div>
  );
};

export default connect(null, { contentAction })(IndexPage);
