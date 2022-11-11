export const FETCH_DETAIL = "FETCH_DETAIL";
export const FETCH_PROFILE_IMAGES = "FETCH_PROFILE_IMAGES";
export const FETCH_TAGGED_IMAGES = "FETCH_TAGGED_IMAGES";
export const FETCH_PERSON_MOVIE_CREDIT = "FETCH_PERSON_MOVIE_CREDIT";
export const FETCH_POPULAR_PERSONS = "FETCH_POPULAR_PERSONS";

export const fetchDetail = (person) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DETAIL, payload: person });
  };
};

export const fetchProfileImages = (profileImages) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PROFILE_IMAGES, payload: profileImages });
  };
};

export const fetchTaggedImages = (taggedImages) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TAGGED_IMAGES, payload: taggedImages });
  };
};

export const fetchPersonMovieCredit = (movieCredits) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PERSON_MOVIE_CREDIT, payload: movieCredits });
  };
};

export const fetchPopularPersons = (popularPersons) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POPULAR_PERSONS, payload: popularPersons });
  };
};
