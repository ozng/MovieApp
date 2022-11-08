import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_API_URL;

export const searchMovie = async (query) => {
  const { data } = await axios.get(`${api_url}/search/movie`, {
    params: {
      api_key: api_key,
      query: query,
    },
  });

  return data.results;
};
