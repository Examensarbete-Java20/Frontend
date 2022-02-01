import React from 'react';
import { connect } from 'react-redux';

import TopTen from '../Images/TopTen';

const IndexPage = () => {
  return (
    <div>
      <TopTen type='movie' title='Top Ten Movies' />
      <TopTen type='series' title='Top Ten Series' />
    </div>
  );
};

export default connect(null, {})(IndexPage);
