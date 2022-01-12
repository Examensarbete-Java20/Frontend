import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import IndexPage from './pages/IndexPage';
import Content from './pages/Content';
import SearchResultPage from './pages/SearchResultPage';

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exac element={<IndexPage />} />
          <Route path='/show/:content/:id' exac element={<Content />} />
          <Route path='/find/:title' exac element={<SearchResultPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
