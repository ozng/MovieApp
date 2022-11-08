import { searchMovie } from "./helpers/movie";

export const GET_POPULAR = "GET_POPULAR";
export const GET_UPCOMING = "GET_UPCOMING";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_DETAIL = "GET_DETAIL";
export const FETCH_IMAGES = "FETCH_IMAGES";
export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const FETCH_SEARCH = "FETCH_SEARCH";
export const FETCH_SIMILAR = "FETCH_SIMILAR";
export const FETCH_CAST = "FETCH_CAST";

export const getPopular = (popularMovies) => {
  return async (dispatch) => {
    dispatch({ type: GET_POPULAR, payload: popularMovies });
  };
};

export const getUpcoming = (upcomingMovies) => {
  return async (dispatch) => {
    dispatch({ type: GET_UPCOMING, payload: upcomingMovies });
  };
};

export const getTopRated = (topRatedMovies) => {
  return async (dispatch) => {
    dispatch({ type: GET_TOP_RATED, payload: topRatedMovies });
  };
};

export const getNowPlaying = (nowPlayingMovies) => {
  return async (dispatch) => {
    dispatch({ type: GET_NOW_PLAYING, payload: nowPlayingMovies });
  };
};

export const getDetail = (movieDetail) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAIL, payload: movieDetail });
  };
};

export const fetchImages = (images) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_IMAGES, payload: images });
  };
};

export const fetchVideos = (videos) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_VIDEOS, payload: videos });
  };
};

export const fetchSearchedMovies = (query) => {
  return async (dispatch) => {
    const searchedMovies = await searchMovie(query);
    dispatch({ type: FETCH_SEARCH, payload: searchedMovies });
  };
};

export const fetchSimilarMovies = (similar) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SIMILAR, payload: similar });
  };
};

export const fetchMovieCast = (cast) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CAST, payload: cast });
  };
};
