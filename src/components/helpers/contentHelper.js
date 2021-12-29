import * as request from '../../api/request';
import DesctriptionReadMore from '../DesctriptionReadMore';

export const getContent = (imdbId, type) => {
  return request.getContent(`/${type}/${imdbId}`);
};

export const renderContent = (content) => {
  console.log(content);

  if (content) {
    return (
      <div className='content'>
        <h1>{content.title}</h1>
        <div className='contentGrid'>
          <img src={content.image_url} alt={content.title} />
          <div className='contentText'>
            <h2>Description</h2>
            <DesctriptionReadMore
              className='contentText'
              text={content.description}
            />
            <div>TESTSADAS</div>
          </div>
        </div>
      </div>
    );
  }
};
