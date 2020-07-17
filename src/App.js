import React from 'react';
import { Route, Routes } from "react-router-dom";
import { UpperNav } from "./Components/HomeComponents/UpperNav/UpperNav";
import { Navbar } from "./Components/HomeComponents/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Components/HomeComponents/home/Home";
import { Products } from "./Components/ProductComponents/product/Product";
import {AllProducts} from "./Components/ProductComponents/AllProduct/AllProducts";
import { ProductDetail } from "./Components/ProductComponents/ProductDetail/ProductDetail";
import { ShoeProvider } from "./Components/Context/Context";


function App() {
  return (
    <div>
      <ShoeProvider>
      <UpperNav />
      

      <Navbar></Navbar>

      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>} >
        
          <Route  path="/" element={<AllProducts/>} />
          <Route  path="/:data" element={<ProductDetail/>} />
          
        </Route>
      </Routes>
      </ShoeProvider>


     






    </div>
  );
}

export default App;
