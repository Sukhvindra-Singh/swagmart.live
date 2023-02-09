import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({user}) => {
  const subtotal = ()=>{
    let cartItems = JSON.parse(localStorage.getItem("cartItems"))
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price,0)
  }
  // let subtotal = cartItems.map((item) => item.quantity * item.price)
  // let subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price,0)
  // console.log(typeof cartItems,cartItems)
  console.log(subtotal())
  return (
    <>
      <Header user={user}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
