import { fetchPopular } from "./helpers/movie";

export const GET_POPULAR = "GET_POPULAR";

export const getPopular = () => {
  return async (dispatch) => {
    const popularMovies = await fetchPopular();

    dispatch({ type: GET_POPULAR, payload: popularMovies });
  };
};
