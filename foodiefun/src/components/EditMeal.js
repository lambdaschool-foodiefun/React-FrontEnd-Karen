import React from "react";
import {connect} from "react-redux";
import { editMeal} from "../actions";

class EditMeal extends React.Component {
    state = {
        meal:this.props.meal
  }


handleChanges = event => {
    let value = event.target.value;
    if(event.target.name ==="food_rating") {
        value = parseInt(value,10);
    }
    this.setState ({
        meal: {
            ...this.state.meal,
            [event.target.name]: value
        }
    })
}
 editMeal = event => {
    event.preventDefault();
     this.props.editMeal(this.state.meal)
 }
render() {
    return(
        <div className="meal-form">
            <form className="edit-form" onSubmit={this.editMeal}>
         
          <input
            type="text"
            name="restaurant_name"
            placeholder="Restaurant Name"
            onChange={this.handleChanges}
            value={this.state.meal.restaurant_name}
          />
        
          <input
            type="text"
            name="restaurant_type"
            placeholder="Restaurant Type"
            onChange={this.handleChanges}
            value={this.state.meal.restaurant_type}
          />

          <input
            type="text"
            name="item_name"
            placeholder="Food Item"
            onChange={this.handleChanges}
            value={this.state.meal.item_name}
          />
          <input
            type="text"
            name="food_rating"
            placeholder="Food Rating"
            onChange={this.handleChanges}
            value={this.state.meal.food_rating}
          />
          <input
            type="text"
            name="item_comment"
            placeholder="Additional Comments"
            onChange={this.handleChanges}
            value={this.state.meal.item_comment}
          />
           <button>
            {this.props.addingMeal ? "Editinging...": "Edit Meal"}
          </button>
        </form>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  editingMeal: state.editingMeal
 })
  
  export default connect(
    mapStateToProps,
    { editMeal }
  )(EditMeal);