import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="start-page">
    <div className="App-header">
      <h1>What's In My Belly?!</h1>
    </div>
      <div className = "signupForm">      
      <h3>Sign Up Here</h3>
        <form>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input type="email" name="email" placeholder="Email" />
          <button>Signup</button>
        </form>
        <p>Already a Member? LogIn   <Link to="/login">here</Link>.</p>
        </div>
    </div>
  );
};
export default Home;