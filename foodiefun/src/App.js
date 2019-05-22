import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect}  from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import ItemList from "./components/ItemList";
import Item from "./components/Item";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  // componentDidMount() {
  //   this.setState({ items: data });
  // }

  render() {
    return (
      <Router>
      <div className="App">
      
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/item-list">Restaurants</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">LogIn</Link>
      
        </div>

        <div className="nav-bar" />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/item-list"
          render={() => <ItemList items={this.state.items} />}
        />
        <Route
          path="/item-list/:id"
          render={props => <Item {...props} items={this.state.items} />}
        />
        <Route exact path="/signup" render={() => <Signup />} />
        <Route exact path="/login" render={() => <Login />} />
      </div>
      </Router>
    );
  }
}

export default App;
