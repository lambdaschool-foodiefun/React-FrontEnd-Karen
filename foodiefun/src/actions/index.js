import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_FOOD_START = 'FETCH_FOOD_START';
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS';
export const FETCH_FOOD_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
  .post(" https://backend-foodie-fun.herokuapp.com/api/auth/login", credentials)
  .then(response => {
    localStorage.setItem('token', response.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
  })
  .catch(error => dispatch(
    { type: LOGIN_FAILURE, 
    payload: error }));
};

export const getData = () => dispatch => {
  dispatch({ type: FETCH_FOOD_START });
  axios()
    .get('https://backend-foodie-fun.herokuapp.com/api/meals/')
    .then(response => {
      dispatch({ type: FETCH_FOOD_SUCCESS, payload: response.data.data });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: FETCH_FOOD_FAILURE, payload: error.response });
    });
};

