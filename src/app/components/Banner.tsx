import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className=" relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-100">
        <Image
          className="h-full w-full object-cover"
          src="/images/banner3.png"
          alt="shoes banner"
          width={1000}
          height={1000}
          
        />
      </div>
    </div>
  );
}
