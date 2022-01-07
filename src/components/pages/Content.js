import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as helper from '../helpers/contentHelper';
import '../../styles/content.css';
import Rating from '../Rating';
import DesctriptionReadMore from '../DesctriptionReadMore';
import TrailerModal from '../TrailerModal';
import PageNotFound from './PageNotFound';

const Content = ({ contentId }) => {
  const [imdbId, setImdbId] = useState('');
  const [content, setContent] = useState('');
  const [showTrailer, setShowTrailer] = useState(false);
  const [type, setType] = useState('movie');
  const [isLoading, setIsLoading] = useState(true);

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
    setType(tempType);
    if (imdbId) {
      helper.getContent(imdbId, tempType).then((data) => setContent(data));
    }

    return () => {
      setContent('');
    };
  }, [imdbId]);

  return (
    <div className='contentContainer'>
      {content ? (
        <div className='content'>
          <div className='titleGrid'>
            <h1 className='contentTitle'>{content.title}</h1>
            {content.trailer && content.trailer.includes('youtube') && (
              <>
                <TrailerModal
                  show={showTrailer}
                  endpoint={content.trailer}
                  onDismiss={() => setShowTrailer(false)}
                />
                <div className='trailer' onClick={() => setShowTrailer(true)}>
                  <img
                    className='trailerImg'
                    src={`http://img.youtube.com/vi/${content.trailer
                      .split('/')
                      .pop()}/0.jpg`}
                    alt='Trailer'
                  />
                </div>
              </>
            )}
          </div>
          <div className='contentGrid'>
            <div>
              <img
                className='posterImg'
                src={content.image_url}
                alt={content.title}
              />
              <Rating title='IMDB' color='yellow' rating={content.rating} />
              <Rating
                title='PEDB'
                color='yellow'
                rating={content.ownRating}
                votes={content.totalOfVoters}
                content={content}
                setContent={setContent}
                type={type}
                PEDB
              />
            </div>
            <div className='contentText'>
              <h2>Description</h2>
              <DesctriptionReadMore className='' text={content.description} />
              <div style={{ marginTop: '1rem' }}>
                Length: {content.movie_length} min
              </div>
              <div style={{ marginTop: '1rem' }}>
                Release Date: {content.release}
              </div>
            </div>
          </div>
          {content.exist ? (
            ''
          ) : (
            <div className='contentBtn'>
              <button className=' ui button '>Save to db</button>
            </div>
          )}
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contentId: state.content.imdbid,
  };
};
export default connect(mapStateToProps)(Content);
