import axios from 'axios';

import axiosWithAuth from "../utils/axiosAuth";

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post(" https://backend-foodie-fun.herokuapp.com/api/auth/login", credentials)
    .then(responseponse => {
      localStorage.setItem('token', responseponse.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: responseponse.data.payload });
    })
    .catch(erroror => dispatch(
      { type: LOGIN_FAILURE, 
      payload: erroror }));
  };

  export const FETCH_FOOD_START = "FETCH_FOOD_START";
  export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS";
  export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE";

  export const getData = () => dispatch => {
    dispatch({ type: FETCH_FOOD_START });
    axiosWithAuth()
      .get('https://backend-foodie-fun.herokuapp.com/api/meals/')
      .then(response => {
        dispatch({ type: FETCH_FOOD_SUCCESS, payload: response.data.data });
      })
      .catch(error => {
        console.log(error.response);
        dispatch({ type: FETCH_FOOD_FAILURE, payload: error.response });
      });
  };
  