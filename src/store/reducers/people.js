import {
  FETCH_DETAIL,
  FETCH_PROFILE_IMAGES,
  FETCH_TAGGED_IMAGES,
  FETCH_PERSON_MOVIE_CREDIT,
} from "../actions/people";

const initialState = {
  selectedPerson: {},
  selectedPersonProfileImages: {},
  selectedPersonTaggedImages: {},
  selectedPersonMovieCredits: {},
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      const detailOfPerson = action.payload;
      return {
        ...state,
        selectedPerson: detailOfPerson,
      };
    case FETCH_PROFILE_IMAGES:
      const selectedPersonProfileImages = action.payload;
      return {
        ...state,
        selectedPersonProfileImages: selectedPersonProfileImages,
      };
    case FETCH_TAGGED_IMAGES:
      const selectedPersonTaggedImages = action.payload;
      return {
        ...state,
        selectedPersonTaggedImages: selectedPersonTaggedImages,
      };
    case FETCH_PERSON_MOVIE_CREDIT:
      const movieCredits = action.payload;
      return {
        ...state,
        selectedPersonMovieCredits: movieCredits,
      };
    default:
      return {
        ...state,
      };
  }
};

export default peopleReducer;
