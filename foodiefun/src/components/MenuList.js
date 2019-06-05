import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData, editMeal, deleteMeal  } from "../actions";
import EditMeal from "./EditMeal";

class MenuList extends React.Component {
  state = {
    deletingMeal: null,
    editingMealId:null,
  };

  componentDidMount() {
    this.props.getData();
  }

  deleteMeal = id => {
    this.setState({ deletingMealId: id });
    this.props.deleteMeal(id);
  };

  editMeal = (event, meal) => {
    event.preventDefault();
    this.props.editMeal(meal).then(() => {
      this.setState({ editingMealId: null });
    });
  };


  render() {
    if(this.props.fetchingData) return<h3>Loading...</h3>;
    return(
      <div className="meal">
        <h2> MEALS LIST</h2>
        {this.props.meals.map(meal => {
          if(this.state.editingMealId===meal.id) {
           return(
              <div className="meal-card">
                <EditMeal
                  meal={meal}
                  editMeal={this.editMeal}
                  editingMeal={this.props.editingMeal}
                />
                </div>
           ) 
          }
          return (
            <div className="meal-card">
            <button  onClick={() => this.setState({ editingMealId: meal.id })}>
              Edit
            </button>
            
            <button onClick={() => this.deleteMeal(meal.id)}>
              Delete
            </button>
              <h4>{meal.restaurant_name}</h4>
              <p>{meal.restaurant_type}</p>
              <p>{meal.item_name}</p>
              <p>{meal.food_rating}</p>
              <p>{meal.item_comment}</p>
              {this.state.deletingMeal && 
                this.state.deletingMealId===meal.id && (
                  <p>Deleting Meal</p>
                )}

            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  deletingMeals:state.deletingMeals,
  meals:state.meals,
  editingMeals:state.editingMeals,
  fetchingData:state.fetchingData
} )

export default withRouter(
  connect(
    mapStateToProps,
    { getData, editMeal, deleteMeal }
  )(MenuList)
);

