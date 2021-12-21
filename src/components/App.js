import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import TopTen from './TopTen';
import Content from './Content';

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exac element={<TopTen />} />
          <Route path='/content/:id' exac element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
