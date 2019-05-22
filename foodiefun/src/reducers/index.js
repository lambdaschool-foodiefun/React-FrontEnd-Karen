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
    meals: false, 
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
      return {
        ...state,
        error: '',
        fetchingFood: false,
        loggingIn: true
      };
      case LOGIN_SUCCESS:
      return { 
        ...state,
       fetchingFood: false,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
       ...state,
      fetchingFood: false,
       error: action.payload,    
      };
      default:
      return state;
    };

}
export default reducer