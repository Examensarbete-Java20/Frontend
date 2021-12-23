import axios from './axios';

export const search = async (title) => {
  try {
    const response = await axios.get(`/series/title/${title}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};
