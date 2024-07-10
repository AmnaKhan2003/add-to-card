import React from "react";

export default function Footer(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        bottom: "0",
        height: "2rem",
        width: "100%",
      }}
    >
      <button
        style={{
          backgroundColor: "red",
          borderStyle: "none",
          color: "white",
          width: "7rem",
        }}
        onClick={() => {
          props.Reset();
        }}
      >
        Reset
      </button>
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        {props.TotalAmount}
      </div>
      <button
        style={{
          backgroundColor: "blue",
          borderStyle: "none",
          color: "white",
          width: "7rem",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
