import React from "react";
import { Link } from "react-router-dom";

import items from "../data";

function ItemList() {
  return (
    <div className="items-list-wrapper">
      <h1> Restaurants: </h1>
      {items.map(item => (
        <div className="item-card" key={item.id}>
          <Link to={`/item-list/${item.id}`}>
            <h2>{item.restaurant_name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
