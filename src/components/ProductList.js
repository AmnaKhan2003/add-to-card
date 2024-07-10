import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
  props.products.length>0 ?
  props.products.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        index={i}
        removeItem={props.removeItem}
      />
    )
    
  })
  :  <h1 style={{textAlign:"center",color:"red"}}>!! NO PRODUCT EXISTS IN CART !!</h1>
)
}
