import {
  FETCH_DETAIL,
  FETCH_PROFILE_IMAGES,
  FETCH_TAGGED_IMAGES,
} from "../actions/people";

const initialState = {
  selectedPerson: {},
  selectedPersonProfileImages: {},
  selectedPersonTaggedImages: {},
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
    default:
      return {
        ...state,
      };
  }
};

export default peopleReducer;
