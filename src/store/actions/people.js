export const FETCH_DETAIL = "FETCH_DETAIL";
export const FETCH_PROFILE_IMAGES = "FETCH_PROFILE_IMAGES";
export const FETCH_TAGGED_IMAGES = "FETCH_TAGGED_IMAGES";

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
