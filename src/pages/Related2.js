import React from "react";

export default function Related2(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <div className="price-container">
        <p className="price">{props.price}</p>
        <p className="originalPrice">{props.price}</p>
      </div>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}