import React from "react";

export default function Product(props) {
  return (
    <>
      <div className="productDiv">
        <div>
          {props.product.name}
          <span>${props.product.price}</span>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "0.5rem",
              borderRadius: "0.2rem",
            }}
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button
            style={{
              backgroundColor: "yellow",
              border: "none",
              padding: "0.5rem",
              borderRadius: "0.2rem",
            }}
          >
            {props.product.quantity}
          </button>
          <button
            type="button"
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "0.5rem",
              borderRadius: "0.2rem",
            }}
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
        <div>{props.product.price * props.product.quantity}</div>
        <div>
          <button
            style={{
              backgroundColor: "red",
              borderStyle: "none",
              color: "white",
              height: "1.5rem",
              borderRadius: "5px",
              width: "10rem",
            }}
            onClick={() => {
              props.removeItem(props.index);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
