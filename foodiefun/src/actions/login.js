import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


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
