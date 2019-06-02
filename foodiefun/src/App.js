// import React from "react";
// import {BrowserRouter as Router, Route, Link}  from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Home from "./components/Home";
// import PrivateRoute from "./components/PrivateRoute";
// import ItemList from "./components/ItemList";
// import Item from "./components/Item";
// import axios from "axios";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://backend-foodie-fun.herokuapp.com")
//       .then(response => console.log(response))
//       .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <Router>
//       <div className="App">
      
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/item-list">Restaurant Name</Link>
//           <Link to="/signup">SignUp</Link>
//           <Link to="/login">LogIn</Link>
      
//         </div>

//         <div className="nav-bar" />
//         <Route exact path="/" component={Home} />
//         <Route
//           exact
//           path="/item-list"
//           render={() => <ItemList items={this.state.items} />}
//         />
//         <Route
//           path="/item-list/:id"
//           render={props => <Item {...props} items={this.state.items} />}
//         />
//         <Route exact path="/signup" render={() => <Signup />} />
//         <Route exact path="/login" render={() => <Login />} />
//       </div>
//       </Router>
//     );
//   }
// }

// export default App;
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Entrees from "./components/Entrees";

class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      account: true,
      data: [],
      addData: [],
      inputText: "",
      searchInputText: [],
      filtered: [],
      restaurant_name: "",
      restaurant_type: "",
      item_name: "",
      item_photo: "",
      food_rating: "",
      wait_time: "",
      item_comment: ""
    };
  }

  componentDidMount() {
    axios
      .post("https://backend-foodie-fun.herokuapp.com/api/auth/login")
      .then(response => this.setState({ items: response.data }))
      .catch(error => console.log(error));
    this.setState({});
  }

  handleLogin = creds => {
    axios
      .post("https://backend-foodie-fun.herokuapp.com/api/auth/login", creds)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        this.getAllMeals();
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSignup = newCreds => {
    axios
      .post(
        "https://backend-foodie-fun.herokuapp.com/api/auth/register",
        newCreds
      )
      .then(response => {
        localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/protected">Protected Page</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Login />} />
          <PrivateRoute exact path="/protected" component={Entrees} />
        </div>
      </Router>
    );
  }
}

export default App;

