import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';

import IndexPage from './pages/IndexPage';
import Content from './pages/Content';
import SearchResultPage from './pages/SearchResultPage';
import GoToTopButton from './GoToTopButton';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const refScrollUp = useRef();
  const [showGoTop, setshowGoTop] = useState('goTopHidden');

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;

    if (position > 50) {
      return setshowGoTop('goTop');
    } else if (position < 50) {
      return setshowGoTop('goTopHidden');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <div className='ui container'>
      <div className="image-opacity"></div>
      <Router>
        <div ref={refScrollUp}></div>
        <GoToTopButton showGoTop={showGoTop} onClick={handleScrollUp} />
        <Header />
        <Routes>
          <Route path='/' exac element={<IndexPage />} />
          <Route path='/show/:content/:id' exac element={<Content />} />
          <Route path='/find/:title' exac element={<SearchResultPage />} />
          <Route path='/user' exac element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
