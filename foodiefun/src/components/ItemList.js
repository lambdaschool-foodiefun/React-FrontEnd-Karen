import React from "react";
import { Link } from "react-router-dom";

import items from "../data";

function ItemList() {
  return (
    <div className="items-list-wrapper">
      {items.map(item => (
        <div className="item-card" key={item.id}>
          <Link to={`/item-list/${item.id}`}>
            <p>{item.restaurant_name}</p>
            <p>${item.item_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
