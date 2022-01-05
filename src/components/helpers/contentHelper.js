import * as request from "../../api/request";
import DesctriptionReadMore from "../DesctriptionReadMore";
import Rating from "../Rating";

export const getContent = (imdbId, type) => {
  return request.getContent(`/${type}/${imdbId}`);
};

export const renderContent = (content) => {
  console.log(content);
  return <div className="test">HEEEj</div>;
};

export const getTopTen = (type) => {
  return request.getContent(`/${type}/topTen`);
};
