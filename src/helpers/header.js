import * as movie from '../api/movieRequest';
import * as series from '../api/seriesRequest';

export const getTitles = (title, content) => {
  if (content === 'series') return series.search(title);
  else if (content === 'movie') return movie.search(title);
};
