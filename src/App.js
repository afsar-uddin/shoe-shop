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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
