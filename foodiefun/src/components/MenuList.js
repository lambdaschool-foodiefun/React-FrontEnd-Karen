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
      <div className="menu-list">
        <h2>MEALS LIST</h2>
        {this.props.meals.map(meal => (
          <div className="meal-card">
            <h3>{meal.restaurant_name}</h3>
            <p>{meal.restaurant_type}</p>
            <p>{meal.item_name}</p>
            <p>{meal.food_rating}</p>
            <p>{meal.item_comment}</p>
            <p>{meal.wait_time}</p>
            <p>{meal.date_visited}</p>
            <p>{meal.id}</p> 
           </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.meals,
    fetchingData: state.fetchingData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(MenuList)
);

