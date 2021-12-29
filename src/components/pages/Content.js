import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as helper from '../helpers/contentHelper';
import '../../styles/content.css';

const Content = ({ contentId }) => {
  const [imdbId, setImdbId] = useState('');
  const [content, setContent] = useState('');
  const [renderedContent, setRenderedContent] = useState('');

  window.onpopstate = () => {
    setImdbId(window.location.pathname.split('/').pop());
  };

  useEffect(() => {
    setImdbId(
      contentId ? contentId : window.location.pathname.split('/').pop()
    );
  }, [contentId]);

  useEffect(() => {
    let tempType = 'movie';
    if (!window.location.pathname.includes(tempType)) tempType = 'series';

    if (imdbId) {
      helper
        .getContent(imdbId ? imdbId : contentId, tempType)
        .then((data) => setContent(data));
    }
  }, [imdbId]);

  useEffect(() => {
    //TODO: Fixa så den renderar filmen med en bra design
    setRenderedContent(helper.renderContent(content));
  }, [content]);

  return <div className='contentContainer'>{renderedContent}</div>;
};

const mapStateToProps = (state) => {
  return {
    contentId: state.content.imdbid,
  };
};
export default connect(mapStateToProps)(Content);
