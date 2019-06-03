import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions";

class Signup extends React.Component {
  state = {
    newCreds: {
      username: "",
      password: ""
    }
  };
  handleChange = event => {
    this.setState({
      newCreds: {
        ...this.state.newCreds,
        [event.target.name]: event.target.value
      }
    });
  };

  signup = event => {
    event.preventDefault();
    this.props.signup(this.state.newCreds).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    return (
      <div className="signupForm">
        <p> Sign up here to create your own, personal food journal. </p>
        <form onSubmit={this.signup}>
          <input
            type="text"
            name="username"
            value={this.state.newCreds.username}
            onChange={this.handleChange}
            placeholder="Create Username"
          />
          <input
            type="password"
            name="password"
            value={this.state.newCreds.password}
            onChange={this.handleChange}
            placeholder="Choose a Password"
          />
          <button>{this.props.isSigningUp ? "Loading..." : "Sign Up"}</button>
        </form>
        <p>
          Already a Member? LogIn <Link to="/login">here</Link>.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSigningUp: state.isSigningUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);