import React from "react";
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";


export default function Navbar() {
  return (
    <div>
      <div className="grid  xl:grid-cols-1 grid-cols-1"> 
      <div className="p-5">
      <div className="py-3 px-3 rounded-xl border-w-full">
      <div  className="flex justify-between items-center gap-2">
      <div className="flex gap-2 justify-between items-center">
      <GiConverseShoe className="w-8 h-8 text-yellow-400 hover:text-white" />
<div style={{position:'relative'}}>
<input className="w-6 h-6 text-lime rounded-full bg-gray py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg-block md:block" type="search" placeholder="Search" />
<CiSearch className="w-5 h-5  text-lime absolute top-1/2 right-3 transform -translate-y-1/2 hidden lg-block md:block" />

</div>
<div className="flex gap-2 justify-between items-center">
  <FaBolt  className="w-8 h-8 text-amber-400 hover:text-white lg:block md:block"/>
  <p className="text-white-400 hover:text-white hidden lg:block md:block">
  Order Now
  <span className="text-amber-400">  at your doorstep</span>
</p>

<FaCartShopping className="inline-block w-8 h-8 text-cyan-400 hover:text-amber rounded-full ring-2 ring-sky-400 p-1 relative"/>
<Image
className="inline block w-8 h-8 rounded-full ring-2 ring-sky-400 relative text-cyan-400 hover:text-white"
src="/images/234.png"
alt="avatar"
width={40
}
height={40} />
</div>
      </div>
      <div className="flex gap-2 justify-between items-center text-lg">
      <GiRunningShoe  size={40}className="w-8 h-8 text-white hover:text-amber-400 mr-1"/>

        <h1  id="solemate" className="text-amber-400 text-xl hover:text-white hidden lg:block md:block mr-10">
        SoleMate</h1>
         {/*<span className="text-amber-400">At your doorstep</span>*/}
      </div>
      </div>

     
      </div>
      
      </div>
     
      </div>
      
    </div>
  );
}
