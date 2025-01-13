"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const Special: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "Explore amazing in an hour",
    },
    {
      title: "Black Friday",
      description: "Don't miss out on our amazing Black Friday deals!",
    },
    {
      title: "Holiday Specials",
      description: "Celebrate the season with exclusive offers!",
    },
  ];

  const handle = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handle('IS SE ACHI OFFER NHI MILE GI!')}
              className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105 p-6"
            >
              <h3 className="text-2xl font-semibold text-red-700">
                {offer.title}
              </h3>
              <p className="text-slate-700 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HomeO() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center my-10">OFFERS</h1>
      <Special />
    </div>
  );
}
