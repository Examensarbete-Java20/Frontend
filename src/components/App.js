import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Test from './TopTen';
import Test2 from './Movie';

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exac element={<Test />} />
          <Route path='/content/:id' exac element={<Test2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
