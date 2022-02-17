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
    const response = await axios.get(`/public/${googleId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return 'error';
  }
};

export const getToken = async (user) => {
  try {
    const response = await axios.post(`/login?username=${user.googleId}`, user);
    if (response.status === 200) {
      return response.data.jwt_token;
    }
  } catch (error) {
    return 'error';
  }
};

export const createUserReqeust = async (user) => {
  try {
    const response = await axios.post(`/public/create/user`, user);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const changeUsernameRequest = async (googleId, newUsername) => {
  try {
    const response = await axios.get(`/user/${googleId}/${newUsername}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const createWatchListReqeust = async (watchList) => {
  try {
    const response = await axios.post(`/user/watchlist`, watchList, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const getUserWatchlist = async (googleId) => {
  try {
    const response = await axios.get(`/user/watchlist/${googleId}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const getUserSingleWatchlist = async (id) => {
  try {
    const response = await axios.get(`/user/single/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const removeWatchList = async (list) => {
  try {
    const response = await axios.delete(`/user/watchlist/remove/${list.id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};

export const addContentToWatchList = async (type, listId, content) => {
  try {
    const response = await axios.post(
      `/user/watchlist/${type}/${listId}`,
      content,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};

export const removeContentFromWatchList = async (listId, content) => {
  try {
    const response = await axios.post(
      `/user/watchlist/content/${listId}`,
      content,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return [];
  }
};
