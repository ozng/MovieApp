import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_API_URL;

export const fetchMovies = async (endpoint) => {
  const { data } = await axios.get(`${api_url}${endpoint}`, {
    params: {
      api_key: api_key,
    },
  });

  return data.results;
};
