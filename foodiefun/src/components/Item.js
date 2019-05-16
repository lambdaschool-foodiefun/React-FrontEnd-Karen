import React from "react";

import items from "../data";

function Item(props) {
  const id = props.match.params.id;
  const item = items.find(item => {
    console.log(item.id, id);
    return `${item.id}` === id;
  });
  return (
    <div className="item-wrapper">
      <h2>{item.restaurant_name}</h2>
      <h4>{item.restaurant_type}</h4>
      <p>{item.item_name}</p>
      <p>{item.food_rating}</p>
      <p>{item.item_comment}</p>
    </div>
  );
}

export default Item;
