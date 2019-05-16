import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import App from './App';
import {createStore, applyMiddleware} from "redux";
import { BrowserRouter as Router } from "react-router-dom"
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Router store={store}>
        <App/>
    </Router>,
    document.getElementById("root")
);
