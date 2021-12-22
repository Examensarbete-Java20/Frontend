import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import TopTen from './TopTen';
import Content from './Content';
import SearchList from './SearchList';

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exac element={<TopTen />} />
          <Route path='/Movie/:id' exac element={<Content />} />
          <Route path='/find/Movie/:id' exac element={<SearchList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
