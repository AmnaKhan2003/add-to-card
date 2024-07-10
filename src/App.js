import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";
import React, { useState } from "react";
import AddItem from "./components/Additem";
function App() {
  const products = [
    {
      price: 10000,
      name: "IPHONE Note 10S",
      quantity: 0,
    },

    {
      price: 50000,
      name: "IPHONE 10S MAX",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [TotalAmount, setTotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    let newTotalAmount = TotalAmount;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      let newTotalAmount = TotalAmount;
      newTotalAmount -= newProductList[index].price;
      setTotalAmount(newTotalAmount);
    }
    setProductList(newProductList);
  };

  const Reset = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = TotalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const AddItems = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  return (
    <>
      <Navbar totalItem={productList.length} />
      <AddItem AddItems={AddItems} />
      <ProductList
        products={productList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
      />
      <Footer TotalAmount={TotalAmount} Reset={Reset} />
    </>
  );
}

export default App;
