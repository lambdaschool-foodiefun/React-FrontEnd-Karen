import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingFood:false,
    loggingIn: false,  
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetchingFood: false,
        loggingIn: true
      };
      default:
      return state;
    }
}
export default reducer