import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <div>
      <section className="lg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full w-full">
            
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
              <a
                href="/List"
                className="group relative block h-full overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/d11.png"
                  alt="shoe1"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 px-4 pt-4 xs:text-xl md:text-0xl">
                  XLASSINO
                </h3>
              </a>
            </div>

            {/* Smaller Items (Grid of Two) */}
            <div className="grid gap-4 grid-cols-2 sm:col-span-2 md:col-span-3">
              <a
                href="#"
                className="group relative block h-full overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/d8.png"
                  alt="shoe3"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 px-4 pt-4 xs:text-xl md:text-0xl">
                  NIKE
                </h3>
              </a>
              <a
                href="#"
                className="group relative block h-full overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/d9.png"
                  alt="shoe4"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105"
               width={1000}
               height={1000}
               />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 px-4 pt-4 xs:text-xl md:text-0xl">
                  FOGERS
                </h3>
              </a>
            </div>

            {/* Second Large Section */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
              <a
                href="#"
                className="group relative block h-full overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/d5.png"
                  alt="shoe2"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105"
                  width={1000}
                  height={1000}
              />
                
                
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 px-4 pt-4 xs:text-xl md:text-0xl">
                  ADIDAS
                </h3>
              </a>
            </div>

            {/* Another Smaller Items Section */}
            <div className="grid gap-4 grid-cols-2 sm:col-span-2 md:col-span-3">
              <a
                href="#"
                className="group relative block h-full overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/d6.png"
                  alt="shoe3"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 px-4 pt-4 xs:text-xl md:text-0xl">
                CASUAL
                </h3>
              </a>
              <a
                href="#"
                className="group relative block h-full overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/d7.png"
                  alt="shoe4"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 px-4 pt-4 xs:text-xl md:text-0xl">
                  JORDEN
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
