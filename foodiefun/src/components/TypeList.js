import React from "react";
import { Link } from "react-router-dom";

import items from "../data";

function TypeList() {
  return (
    <div className="type-list-wrapper">
      <h1> My Restaurant List: </h1>
      {items.map(item => (
        <div className="type-card" key={item.id}>
          <Link to={`/type-list/${item.id}`}>
            <h2>{item.restaurant_type}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TypeList;