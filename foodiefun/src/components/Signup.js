import React from "react";


class Signup extends React.Component {
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
    
      signup = event => {
        event.preventDefault();
        this.props.signup(this.state.credentials).then(() => {
          this.props.history.push('/protected');
        });
      };

      render() {
        return (
          <div className = "signupForm">
            <form onSubmit={this.signup}>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder="Create Username"
              />
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Choose a Password"
              />
               <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Repeat Password"
              />
              <button>Sign Up</button>
            </form>
          </div>
        );
      }
}
export default Signup