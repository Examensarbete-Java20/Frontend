import React, { useState } from 'react';

const DesctriptionReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className='readMore'>
      {isReadMore ? text.slice(0, 300) : text}
      {text.length > 300 ? (
        <span className='readMoreBtn' onClick={toggleReadMore}>
          {isReadMore ? ' -->' : ' <--'}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default DesctriptionReadMore;
