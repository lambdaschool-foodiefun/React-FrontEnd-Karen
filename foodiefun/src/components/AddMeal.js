import React from "react";
import {connect} from "react-redux";
import { addMeal} from "../actions";

class AddMeal extends React.Component {
    state = {
        meal:{
          restaurant_name:"",
          restaurant_type:"",
          item_name:"",
          food_rating:"",
          item_comment:""
         
    }
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
 addMeal = event => {
    event.preventDefault();
     this.props.addMeal(this.state.meal)
    //  .then(() => {this.props.history.push("/protected");
    // });
    this.setState({
        meals: {
            restaurant_name:"",
            restaurant_type:"",
            item_name:"",
            food_rating:"",
            item_comment:""
           
        }
    })
 }
render() {
    return(
        <div className="meal-form">
            <h2>Add New Meal</h2>
            <form onSubmit={this.addMeal}>
         
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
            {this.props.addingMeal ? "Adding...": "Add Meal"}
          </button>
        </form>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  addingMeal: state.addingMeal
 })
  
  export default connect(
    mapStateToProps,
    { addMeal }
  )(AddMeal);