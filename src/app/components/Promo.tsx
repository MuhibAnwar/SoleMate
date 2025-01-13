import React from "react";
import Image from "next/image";

const Promo = [
  {
    id: 1,
    name: "Recomended",
    price: "$350",
    category: "Running shoes",
    bgColor: "bg-amber-500",
    image: "/images/rfc.jpg",
  },
  {
    id: 2,
    name: "Best Seller",
    price: "$410",
    category: "Canvas",
    bgColor: "bg-teal-200",
    image: "/images/r3-removebg-preview.jpg",
  },
  {
    id: 3,
    name: "New Arrivals",
    price: "$200",
    category: "Sneakers",
    bgColor: "bg-amber-500",
    image: "/images/r2-removebg-preview.jpg",
  },
];

interface PromoItem {
  id: number;
  name: string;
  price: string;
  category: string;
  bgColor: string;
  image: string;
}

export default function Items() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {Promo.map((promo: PromoItem) => (
        <div
          key={promo.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${promo.bgColor} rounded-lg shadow-lg group max-w-sm`}
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
              src={promo.image}
              alt={`${promo.name} - ${promo.category}`}
              width={300}
              height={300}
           
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1 text-black">{promo.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl text-black">
                {promo.name}
              </span>
              <span className="block rounded-full text-black text-lg font-bold px-3 py-2 leading-none">
                {promo.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
