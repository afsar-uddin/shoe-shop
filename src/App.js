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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
