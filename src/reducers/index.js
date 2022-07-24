import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  CONFIRMATION_MESSAGE
} from "../actions/index";

const initialState = {
  contacts: [],
  isFetching: false,
  isSuccess: false,
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        message: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        isFetching: false,
        isSuccess: true,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        message: action.payload,
      };
    case CONFIRMATION_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
