import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '';

export default axios.create({
  baseURL: url,
});
