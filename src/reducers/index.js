import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../actions/index";

const initialState = {
  contacts: [],
  isFetching: false,
  isSuccess: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
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
        error: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
