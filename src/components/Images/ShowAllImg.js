import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { contentAction } from '../../redux/actions';
import Poster from './Poster';

const ShowAllImg = ({ content }) => {
  return (
    content && (
      <div className='imagesGrid'>
        {content.map((content) => {
          return (
            <Link
              key={content.imdb_id}
              className='slideStuff'
              onClick={() => contentAction(content.imdb_id)}
              to={`/show/${content.type}/${content.imdb_id}`}
            >
              <div className={`slideImg`}>
                <Poster content={content} showRating borderRadius />
              </div>
              <h3 className={`sliderTitle`}>
                {content.title.length > 26
                  ? `${content.title.slice(0, 26)}...`
                  : content.title}
                {content.release && ` (${content.release.substring(0, 4)})`}
              </h3>
            </Link>
          );
        })}
      </div>
    )
  );
};

export default connect(null, contentAction)(ShowAllImg);
