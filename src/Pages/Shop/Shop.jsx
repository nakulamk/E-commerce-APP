import React from "react";
import "./Shop.css";
import { DummyData } from "../../DummyData";
import { Product } from "./Product";
function Shop() {
  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1>Shop App</h1>
      </div>
      <div className="products">
        {DummyData.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
