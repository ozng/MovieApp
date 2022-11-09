export const FETCH_DETAIL = "FETCH_DETAIL";

export const fetchDetail = (person) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DETAIL, payload: person });
  };
};
