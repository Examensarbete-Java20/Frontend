import axios from './axios';

export const search = async (title) => {
  const response = await axios.get(`/series/title/${title}`);

  console.log(response);
};
