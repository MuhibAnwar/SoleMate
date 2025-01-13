import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-start max-w-screen-lg mx-auto mt-10 space-y-12">
      {/* Step 1 */}
      <div className="flex items-center w-full">
        {/* Step Icon */}
        <div className="w-8 h-8 flex items-center justify-center shrink-0 rounded-full bg-amber-400">
          <span className="text-base text-black font-bold">1</span>
        </div>
        {/* Step Line */}
        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-400"></div>
        {/* Step Text */}
        <div className="flex flex-col items-start ml-4">
          <h6 className="text-amber-400 text-base font-bold">SELECT</h6>
          <p className="text-xs text-white">Explore our wide range of products</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center w-full">
        {/* Step Icon */}
        <div className="w-8 h-8 flex items-center justify-center shrink-0 rounded-full bg-amber-400">
          <span className="text-base text-black font-bold">2</span>
        </div>
        {/* Step Line */}
        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-400"></div>
        {/* Step Text */}
        <div className="flex flex-col items-start ml-4">
          <h6 className="text-amber-400 text-base font-bold">PLACE ORDER</h6>
          <p className="text-xs text-white">Add your details</p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center w-full">
        {/* Step Icon */}
        <div className="w-8 h-8 flex items-center justify-center shrink-0 rounded-full bg-amber-400">
          <span className="text-base text-black font-bold">3</span>
        </div>
        {/* Step Line */}
        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-400"></div>
        {/* Step Text */}
        <div className="flex flex-col items-start ml-4">
          <h6 className="text-amber-400 text-base font-bold">GET DELIVERED</h6>
          <p className="text-xs text-white">Enjoy your shoes</p>
        </div>
      </div>
    </div>
  );
}
