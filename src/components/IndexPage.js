import React from 'react';
import TopTen from './TopTen';

const IndexPage = () => {
  return (
    <div>
      <h1>Film</h1>
      <TopTen />
      <h1>Serier</h1>
      <TopTen />
    </div>
  );
};

export default IndexPage;
