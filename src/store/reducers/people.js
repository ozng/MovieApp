import { FETCH_DETAIL } from "../actions/people";

const initialState = {
  selectedPerson: {},
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      const detailOfPerson = action.payload;
      return {
        ...state,
        selectedPerson: detailOfPerson,
      };
    default:
      return {
        ...state,
      };
  }
};

export default peopleReducer;
