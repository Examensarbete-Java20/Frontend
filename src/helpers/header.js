import * as movie from '../api/movieRequest';
import * as series from '../api/seriesRequest';

export const getMovieTitle = (title) => {
  return movie.search(title);
};
