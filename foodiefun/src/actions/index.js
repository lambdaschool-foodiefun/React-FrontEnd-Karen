import axios from "axios";
import   axiosWithAuth   from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {
  console.log(creds);
  dispatch({ type: LOGIN_START });
  return axios
    .post(" https://backend-foodie-fun.herokuapp.com/api/auth/login", {username: creds.username, password:creds.password})
    .then(response => {
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.payload });
    })
    .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error }));
};

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const signup = newCreds => dispatch => {
  
  dispatch({ type: SIGNUP_START });
  return axios
    .post(
      " https://backend-foodie-fun.herokuapp.com/api/auth/register",
      {username: newCreds.username, password: newCreds.password}
    )
    .then(response => {
      console.log(response.data)
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNUP_SUCCESS", payload: response.data.payload });
    })
    .catch(error => dispatch({ type: SIGNUP_FAILURE, payload: error }));
};

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const getData = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://backend-foodie-fun.herokuapp.com/api/meals/", {
      headers: { Authorization: localStorage.getItem("token") }
    })

    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: FETCH_FAILURE, payload: error.response });
    });
};

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
export const addData = meal => dispatch => {
  dispatch({ type: ADD_START });
  axiosWithAuth()
    .post("https://backend-foodie-fun.herokuapp.com/api/meals",meal, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log(response)
      dispatch({ type: ADD_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: ADD_FAILURE, payload: error.response });
    });
};

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";
export const deleteData = id => dispatch => {
  dispatch({ type: DELETE_START });
  axiosWithAuth()
    .get("https://backend-foodie-fun.herokuapp.com/api/meals/id", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      dispatch({ type: DELETE_SUCCESS, payload: response.data.data });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: DELETE_FAILURE, payload: error.response });
    });
};