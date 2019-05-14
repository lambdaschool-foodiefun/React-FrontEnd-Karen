import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect}  from "react-router-dom";
import Login from "./components/Login";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return(
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <div className="App-header ">
          <h1>You Ready To Eat?</h1>
        </div>
     
      <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}
export default App
