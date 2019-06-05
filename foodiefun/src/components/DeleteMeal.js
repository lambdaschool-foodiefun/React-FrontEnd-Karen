import React from "react";

class DeleteMeal extends React.Component {
    state = {
        meal:this.props.meal
  }

  
handleChanges = event => {    
    this.setState ({
        meal: {
            ...this.state.meal,
            [event.target.name]: event.target.value
        }
    })
}

deleteMeal = id => {
    this.setState({deletingMeal:id})
     this.props.deleteMeal(id)
}

 render() {
     return(
        <h4>Something Goes Here</h4> 
     )
 }
}
export default DeleteMeal