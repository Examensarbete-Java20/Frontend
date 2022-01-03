import React from 'react';
import TopTenMovie from '../TopTenMovie';
import TopTenSerie from '../TopTenSerie';

const IndexPage = () => {
  return (
    <div>
      <h1>Film</h1>
      <TopTenMovie />
      <h1>Serier</h1>
      <TopTenSerie />
    </div>
  );
};

export default IndexPage;
