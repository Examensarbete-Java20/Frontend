import axios from './axios';

export const search = async (type, title) => {
  try {
    const response = await axios.get(`/${type}/title/${title}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const searchResult = async (type, title, counter) => {
  try {
    const response = await axios.get(`/${type}/all/${title}/${counter}`);
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
    return '';
  }
};

export const updateRating = async (type, content, googleId, rating) => {
  try {
    const response = await axios.post(
      `/${type}/update/${googleId}/${rating}`,
      content
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const logIn = async (googleId) => {
  try {
    const response = await axios.get(`/user/${googleId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const getUserWatchlist = async (googleId) => {
  try {
    const response = await axios.get(`/watchlist/${googleId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};
