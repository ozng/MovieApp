import {
  FETCH_IMAGES,
  FETCH_VIDEOS,
  GET_DETAIL,
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_TOP_RATED,
  GET_UPCOMING,
  FETCH_SEARCH,
  FETCH_SIMILAR,
  FETCH_CAST,
} from "../actions/movie";

const initialState = {
  isLoading: true,
  popular: [],
  upcoming: [],
  topRated: [],
  nowPlaying: [],
  selected: {},
  selectedMovieImages: {},
  selectedMovieVideos: {},
  searchedMovies: [],
  similarMovies: [],
  selectedMovieCast: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR:
      const popularMovies = action.payload;
      return {
        ...state,
        popular: popularMovies,
        isLoading: false,
      };
    case GET_NOW_PLAYING:
      const nowPlayingMovies = action.payload;
      return {
        ...state,
        nowPlaying: nowPlayingMovies,
        isLoading: false,
      };
    case GET_TOP_RATED:
      const topRatedMovies = action.payload;
      return {
        ...state,
        topRated: topRatedMovies,
        isLoading: false,
      };
    case GET_UPCOMING:
      const upcomingMovies = action.payload;
      return {
        ...state,
        upcoming: upcomingMovies,
        isLoading: false,
      };
    case GET_DETAIL:
      const movieDetail = action.payload;
      return {
        ...state,
        selected: movieDetail,
      };
    case FETCH_IMAGES:
      const fetchedImages = action.payload;
      return {
        ...state,
        selectedMovieImages: fetchedImages,
      };
    case FETCH_VIDEOS:
      const fetchedVideos = action.payload;
      return {
        ...state,
        selectedMovieVideos: fetchedVideos,
      };
    case FETCH_SEARCH:
      const searchedMovies = action.payload;
      return {
        ...state,
        searchedMovies: searchedMovies,
      };
    case FETCH_SIMILAR:
      const fetchedSimilarMovies = action.payload;
      return {
        ...state,
        similarMovies: fetchedSimilarMovies,
      };
    case FETCH_CAST:
      const fetchedCastMovies = action.payload;
      return {
        ...state,
        selectedMovieCast: fetchedCastMovies,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
