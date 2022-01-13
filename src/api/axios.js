import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : process.env.REACT_APP_BACKEND_URL;

export default axios.create({
  baseURL: url,
});
