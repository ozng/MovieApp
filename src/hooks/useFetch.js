import axios from "axios";
import { useState, useEffect } from "react";

const api_key = process.env.REACT_APP_API_KEY;
const api_url = process.env.REACT_APP_API_URL;

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    reFetch();
  }, [endpoint]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${api_url}${endpoint}`, {
        params: {
          api_key: api_key,
        },
      });
      const resData = await response.data;
      setData(resData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
