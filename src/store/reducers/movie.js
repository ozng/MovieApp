import { GET_POPULAR } from "../actions/movie";
import { setPopularMoviesPicturesHandler } from "./helpers/movie";

const initialState = {
  popular: [],
  popularMoviesPictures: [],
  selected: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR:
      const popularMovies = action.payload;
      const popularMoviePicture =
        setPopularMoviesPicturesHandler(popularMovies);
      return {
        ...state,
        popular: action.payload,
        popularMoviesPictures: popularMoviePicture,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
