import React from 'react';
import TopTen from '../TopTen';

const IndexPage = () => {
  return (
    <div>
      <h1>    Film</h1>
      <TopTen type="movie"/>
      <h1>    Serier</h1>
      <TopTen type="series"/>
    </div>
  );
};

export default IndexPage;
