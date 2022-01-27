import axios from './axios';

export const search = async (type, title) => {
  try {
    const response = await axios.get(`/public/${type}/title/${title}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const searchResult = async (type, title, counter) => {
  try {
    const response = await axios.get(`/public/${type}/all/${title}/${counter}`);
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
      `/public/${type}/update/${googleId}/${rating}`,
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

export const createUserReqeust = async (user) => {
  try {
    const response = await axios.post(`/public/create/user`, user);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log({error})
    return {};
  }
};

export const createWatchListReqeust = async (watchList) => {
  try {
    const response = await axios.post(`/user/watchlist`, watchList);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const getUserWatchlist = async (googleId) => {
  try {
    const response = await axios.get(`/user/watchlist/${googleId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const addContentToWatchList = async (type, listId) => {
  try {
    const response = await axios.post(`/user/watchlist/${type}/${listId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const removeFromWatchList = async (type, listId) => {
  try {
    const response = await axios.delete(`/user/watchlist/${type}/${listId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};
