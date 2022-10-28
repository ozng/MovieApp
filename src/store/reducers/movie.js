import {
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_TOP_RATED,
  GET_UPCOMING,
} from "../actions/movie";

const initialState = {
  popular: [],
  upcoming: [],
  topRated: [],
  nowPlaying: [],
  selected: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR:
      const popularMovies = action.payload;
      return {
        ...state,
        popular: popularMovies,
      };
    case GET_NOW_PLAYING:
      const nowPlayingMovies = action.payload;
      return {
        ...state,
        nowPlaying: nowPlayingMovies,
      };
    case GET_TOP_RATED:
      const topRatedMovies = action.payload;
      return {
        ...state,
        topRated: topRatedMovies,
      };
    case GET_UPCOMING:
      const upcomingMovies = action.payload;
      return {
        ...state,
        nowPlaying: upcomingMovies,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
