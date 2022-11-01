import { fetchMovies } from "./helpers/movie";

export const GET_POPULAR = "GET_POPULAR";
export const GET_UPCOMING = "GET_UPCOMING";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_DETAIL = "GET_DETAIL";

export const getPopular = () => {
  return async (dispatch) => {
    const popularMovies = await fetchMovies("/movie/popular");

    dispatch({ type: GET_POPULAR, payload: popularMovies });
  };
};

export const getUpcoming = () => {
  return async (dispatch) => {
    const upcomingMovies = await fetchMovies("/movie/upcoming");

    dispatch({ type: GET_UPCOMING, payload: upcomingMovies });
  };
};

export const getTopRated = () => {
  return async (dispatch) => {
    const topRatedMovies = await fetchMovies("/movie/top_rated");

    dispatch({ type: GET_TOP_RATED, payload: topRatedMovies });
  };
};

export const getNowPlaying = () => {
  return async (dispatch) => {
    const nowPlayingMovies = await fetchMovies("/movie/now_playing");

    dispatch({ type: GET_NOW_PLAYING, payload: nowPlayingMovies });
  };
};

export const getDetail = (data) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAIL, payload: data });
  };
};
