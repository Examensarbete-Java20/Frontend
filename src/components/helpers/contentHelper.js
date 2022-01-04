import * as request from '../../api/request';

export const getContent = (imdbId, type) => {
  return request.getContent(`/${type}/${imdbId}`);
};

export const renderContent = (content) => {
  console.log(content);
  return <div className='test'>HEEEj</div>;
};

export const getTopTenMovie = () => {
  return request.getContent(`/movie/topTen`)
}

export const getTopTenSerie = () => {
  return request.getContent(`/series/topTen`)
}