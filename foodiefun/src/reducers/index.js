import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions";

const initialState = {
  error: "",
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  isSigningUp: false,
  token: localStorage.getItem('token'),
  meals: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        isSigningUp: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isSigningUp: false,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isSigningUp: false,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        isLoggingIn: false,
        isSigningUp: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isSigningUp: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isSigningUp: false,
        error: action.payload
      };
    case FETCH_START:
      return {
        ...state,
        fetchingData: true
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingData: false,
        errorStatusCode: action.payload.status,
        error: action.payload.data.error
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        errorStatusCode: null,
        meals: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
