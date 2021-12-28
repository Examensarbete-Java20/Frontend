import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as helper from '../helpers/content';

const Content = ({ contentType, contentId }) => {
  const [imdbId, setImdbId] = useState('');
  const [type, setType] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setType(
      contentType
        ? contentType
        : () => {
            if (window.location.pathname.includes('movie')) return 'movie';
            return 'series';
          }
    );
    setImdbId(
      contentId
        ? contentId
        : window.location.pathname.includes('movie')
        ? window.location.pathname.replace(`/show/movie/`, '')
        : window.location.pathname.replace(`/show/series/`, '')
    );

    helper
      .getContent(
        contentId ? contentId : imdbId,
        contentType ? contentType : type
      )
      .then((data) => setContent(data));
  }, [contentId]);

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <div>
      <h1>{content.title}</h1>
      <div>{imdbId}</div>
      <div>{type}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contentType: state.content.type,
    contentId: state.content.imdbid,
  };
};
export default connect(mapStateToProps)(Content);
