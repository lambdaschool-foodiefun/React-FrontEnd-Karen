import React from "react";
import {connect} from "react-redux";
import {login} from "../actions"


class Login extends React.Component {
    state = {
        credentials: {
            username:"",
            password:"",
        }
    }
    handleChange = event => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
          }
        });
      };
    
      login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials).then(() => {
          this.props.history.push('/protected');
        });
      };

      render() {
        return (
          <div className="loginForm">
            <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <button>Log in</button>
            </form>
          </div>
        );
      }
}
export default connect(
  null,
  { login }
)(Login);