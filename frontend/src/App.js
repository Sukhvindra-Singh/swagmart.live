import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import OurStore from "./pages/OurStore";
import ProductDetails from "./components/Products/ProductDetails";
// import Blogs from "./pages/Blogs";
// import CompareProduct from "./pages/CompareProduct";
// import Wishlist from "./pages/Wishlist";
import LoginSignUp from "./pages/LoginSignUp";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import OrderSuccess from "./components/Cart/OrderSuccess";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { loadUser } from "./actions/userAction";
import NotFound from "./components/Not Found/NotFound";
import UserOptions from "./components/UserOptions";
import MyOrder from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails"
import UpdatePassword from "./pages/UpdatePassword"
// import Dashboard from "./components/Admin/scenes/dashboard";
// import Products from "./components/Admin/scenes/products";
// import Customers from "./components/Admin/scenes/customers";
// import Transactions from "./components/Admin/scenes/transactions";
// import Geography from "./components/Admin/scenes/geography";
// import Overview from "./components/Admin/scenes/overview";
// import Daily from "./components/Admin/scenes/daily";
// import Monthly from "./components/Admin/scenes/monthly";
// import Breakdown from "./components/Admin/scenes/breakdown";
// import Admin from "./components/Admin/scenes/admin";
// import Performance from "./components/Admin/scenes/performance";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  const dispatch = useDispatch();

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  
  useEffect(() => {
    getStripeApiKey();
    dispatch(loadUser());
    //eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>

        {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route path="" element={<Layout user={user}/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="store" element={<OurStore />} />
            <Route path="login" element={<LoginSignUp />} />
            <Route path="account" element={<Profile/>} />
            <Route path="me/update" element={<UpdateProfile />} />
            <Route path="password/update" element={<UpdatePassword />} />
            <Route path="password/forgot" element={<ForgotPassword />} />
            <Route path="password/reset/:token" element={<ResetPassword />} />
            <Route exact path="store/:keyword" element={<OurStore />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="order/confirm" element={<ConfirmOrder/>}/>
            <Route path="orders/me" element={<MyOrder />} />
            <Route path="order/:id" element={<OrderDetails />} />
            <Route path="success" element={<OrderSuccess />} />
            <Route
              path="payment/process"
              element={
                stripeApiKey && (
                  <Elements stripe= {loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                )
              }
              />
            {isAuthenticated &&<Route
              element={
                window.location.pathname === "/process/payment" ? null : (
                  <NotFound />
                  )
                }
                />}
              {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<OurStore />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} /> */}
          </Route>
                {/* <Route path="blogs" element={<Blogs />} /> */}
                {/* <Route path="compare-product" element={<CompareProduct />} /> */}
                {/* <Route path="wishlist" element={<Wishlist />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
