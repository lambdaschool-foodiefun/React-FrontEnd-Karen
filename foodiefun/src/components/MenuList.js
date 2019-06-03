import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData } from "../actions";


class MenuList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetchingData) return <h3>Loading...</h3>;
    return (
      <div>
    <h1>PROTECTED LIST</h1>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return{
  meals: state.meals,
  fetchingData: state.fetchingData
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(MenuList)
);

