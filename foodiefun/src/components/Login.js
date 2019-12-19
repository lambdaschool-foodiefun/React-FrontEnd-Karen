import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {login} from "../actions"


class Login extends React.Component {
    state = {
        creds: {
            username:"",
            password:"",
        }
    }
    handleChange = event => {
        this.setState({
          creds: {
            ...this.state.creds,
            [event.target.name]: event.target.value
          }
        });
      };
    
      login = event => {
        event.preventDefault();
        this.props.login(this.state.creds)
        .then(() => {
          this.props.history.push('/protected');
        });
      };

      render() {
        return (
          <div className="loginForm">
            <p>Log in here to access your personal food journal.</p>
            <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                value={this.state.creds.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                value={this.state.creds.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <button>{this.props.isLogging ? "Loading..." : "Log in"}</button>
            </form>
            <p>Not a  Member? Sign up   <Link to="/signup">here</Link>.</p>
          </div>
        );
      }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});
export default connect(
  mapStateToProps,
  { login }
)(Login);