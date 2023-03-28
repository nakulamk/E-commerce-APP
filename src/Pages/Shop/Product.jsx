import React from "react";

export const Product = (props) => {
  return (
    <div className="product">
      <img src={props.data.productImage} alt="Product-Img" />
      <div className="description">
        <p>
          <b>{props.data.productName}</b>
        </p>
        <p>${props.data.price}</p>
      </div>
      <button className="addToCartBttn">Add to cart</button>
    </div>
  );
};
