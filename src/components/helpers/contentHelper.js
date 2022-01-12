import * as request from "../../api/request";

export const getContent = (imdbId, type) => {
  return request.getContent(`/${type}/${imdbId}`);
};

export const getTopTen = (type) => {
  return request.getContent(`/${type}/topTen`);
};
