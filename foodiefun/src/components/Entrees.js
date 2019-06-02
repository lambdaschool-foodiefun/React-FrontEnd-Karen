import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Entrees extends React.Component {
  render() {
    return <h1>PROTECTED</h1>;
  }
}

export default withRouter(
  connect(
    null,
    {}
  )(Entrees)
);
