"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Product } from "@/types/types";
import ProductCard from "./Productcard";

const Menu: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);


  
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addOnCart = useCallback((product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  
  const toggleCart = useCallback(() => {
    setShowCart((prev) => !prev);
  }, []);

  
  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
  }, []);


  const gotoCheckout = useCallback(() => {
    setIsCheckout(true);
  }, []);

  const sampleProducts: Product[] = [
    {
      id: 1,
      name: "Shoes Name 1",
      price: "414",
      image: "/images/e1.png",
    },
    {
      id: 2,
      name: "Shoes Name 2",
      price: "350",
  
      image: "/images/e2.png",
    },
    {
      id: 3,
      name: "Shoes Name 3",
      price: "518",
      image: "/images/e3.png",
  },
  {
      id: 4,
      name: "Shoes Name 4",
      price: "240",
      image: "/images/e4.png",
    },
    {
      id: 5,
      name: "Shoes Name 5",
      price: "550",
      image: "/images/e5.png",
    },
    {
      id: 6,
      name: "Shoes Name 6",
      price: "375",
      image: "/images/r3.png",
    },
  ];

  return (
    <div  id="List" className="relative min-h-screen py-6">
      
      <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"></div>

      <div className="relative z-10">
        
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            BEST ARTICLES FROM US
          </h1>
          <p className="text-xl text-white">
            Explore our designs and make a wish!
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={addOnCart} />
          ))}
        </div>

  
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold mb-4 text-blue-500">Your Cart</h3>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="mb-6 flex justify-between items-center transform transition duration-300 ease-in-out hover:scale-105"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-15 mr-4 transform transition duration-300 ease-in-out hover:scale-110"
                          width={200}
                          height={150}
                        />
                        <span className="font-medium text-slate-700">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between mt-6 items-center">
                    <span className="font-semibold text-xl text-black">
                      Total: $
                      {Array.isArray(cart) && cart.length > 0
                        ? cart.reduce(
                            (total, product) =>
                              total + parseFloat(product.price || "0"),
                            0
                          ).toFixed(2)
                        : "0.00"}
                    </span>
                    <div>
                      <button
                        onClick={gotoCheckout}
                        className="py-3 px-8 bg-green-500 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-300 ease-out transform"
                      >
                        Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="ml-4 py-3 px-8 bg-red-500 rounded-lg text-lg shadow-md hover:bg-red-600 transition duration-300 ease-out transform"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-700">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>

      
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">Checkout</h2>
              <p className="text-lg text-slate-700">Confirm your order</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="mb-6 flex justify-between text-black"
                    >
                      <span className="font-medium">{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4">
                  <span className="font-semibold text-xl">
                    Total: $
                    {cart.reduce(
                      (total, product) =>
                        total + parseFloat(product.price || "0"),
                      0
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-slate-600 text-white px-6 py-2 shadow-md rounded-lg hover:bg-slate-700 transition duration-300 ease-in-out"
                  onClick={() => setIsCheckout(false)}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white px-6 py-2 shadow-md rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                  onClick={() => alert("Order confirmed! Order Karne ke Liye Shukriya")}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
