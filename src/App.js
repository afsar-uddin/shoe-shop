import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import Shipping from "./Pages/Shipping";
import Payment from "./Pages/Payment";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/shipping/" element={<Shipping />} />
          <Route path="/payment/" element={<Payment />} />
          <Route path="/place-order/" element={<PlaceOrder />} />
          <Route path="/order/" element={<Order />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
