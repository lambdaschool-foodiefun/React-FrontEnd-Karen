import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="start-page">
    <div className="App-header">
      <h1>Foodie Fun!</h1>
      
    </div>
      <div className = "signupForm">      
      <p> Sign up  <Link to="/signup">here</Link> to create your own, personal food journal. </p>
        <p>Already a Member? LogIn   <Link to="/login">here</Link>.</p>
        </div>
    </div>
  );
};
export default Home;