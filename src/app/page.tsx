import React from "react";


import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ProductList from "./components/ProductList";
import Progessor from "./components/Progessor";
import Testimonals from "./components/Testimonals";

import Comment from "./components/Comment";
import Menu from "./components/List";

import Items from "./components/Promo";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">

      <Navbar />
      <Carousel />
      <Progessor />
      <ProductList />
  <Menu />
      <Items />
      <Offer />
    
      <Testimonals />
      
      <Comment />
      <Footer />

    </div>
  );
}
