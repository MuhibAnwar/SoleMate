import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Hoka One One Men's Running Shoes",
    price: "$414",
    category: "Running shoes",
    bgColor: "bg-amber-500",
    image: "/images/l1-removebg-preview.jpg",
  },
  {
    id: 2,
    name: "adidas Men's Trainers",
    price: "$416",
    category: "Canvas",
    bgColor: "bg-teal-200",
    image: "/images/d3-removebg-preview.jpg",
  },
  {
    id: 3,
    name: "adidas Women's NMD S79165 Trainers",
    price: "$518",
    category: "Sneakers",
    bgColor: "bg-amber-500",
    image: "/images/e4-removebg-preview.jpg",
  },
];

export default function List() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.66] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              x="107.48"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0,0,1,20deg) scale3d(1,0.6,1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              className="relative w-full image-cover group-hover:scale-110 transition-transform"
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1  text-black">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl text-black">
                {product.name}
              </span>
              <span className="block rounded-full text-black text-lg font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
