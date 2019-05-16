import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_FOOD_START,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILURE
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