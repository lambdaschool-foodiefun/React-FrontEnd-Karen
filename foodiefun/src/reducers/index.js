import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
  EDIT_START,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from "../actions";

const initialState = {
  error: "",
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  isSigningUp: false,
  addingMeal: false,
  editingMeal: false,
  deletingMeal: false,
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
      case ADD_START:
      return {
        ...state,
        addingMeal: true
      };
     case ADD_SUCCESS:
      return {
        ...state,
        addingMeal: false,
        error: '',
        errorStatusCode: null,
        meals: action.payload
      };
      case EDIT_START:
        return {
          ...state,
          editingMeal: true
        };
      case EDIT_SUCCESS:
        return {
          ...state,
          editingMeal: false,
          error: '',
          errorStatusCode: null,
          meals: action.payload
        };
        case DELETE_START:
          return {
            ...state,
            deletingMeal: true
          };
        case DELETE_SUCCESS:
          return {
            ...state,
            deletingMeal: false,
            error: '',
            errorStatusCode: null,
            meal: action.payload
          };

    default:
      return state;
  }
};


export default reducer;
