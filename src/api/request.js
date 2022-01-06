import axios from './axios';

export const search = async (title, type) => {
  try {
    const response = await axios.get(`/${type}/title/${title}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const searchResult = async (title) => {
  try {
    const response = await axios.get(`/all/title/${title}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const getContent = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const updateRating = async (type, content, rating) => {
  try {
    const response = await axios.post(`/${type}/update/${rating}`, content);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};
