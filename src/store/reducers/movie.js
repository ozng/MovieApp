import {
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_TOP_RATED,
  GET_UPCOMING,
} from "../actions/movie";

const initialState = {
  isLoading: true,
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
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
