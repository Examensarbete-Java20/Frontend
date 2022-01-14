import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development'
    ? 'https://movie-pedb.herokuapp.com/'
    : process.env.REACT_APP_BACKEND_URL;

export default axios.create({
  baseURL: url,
});
