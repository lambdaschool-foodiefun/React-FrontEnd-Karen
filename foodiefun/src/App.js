import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect}  from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return(
    <Router>
      <div className="App">

      <div className="App-header ">
          <h1>Foodie Fun App</h1>
        </div>
      <div className="nav-links">
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        </div>
        
     
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      </div>
    </Router>
  )
}
export default App