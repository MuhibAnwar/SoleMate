import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
    <footer className="flex  flex-col space-y-10  justify-center items-center mb-0 m-10">
      <nav className="flex justify-center flex-wrap gap-6 text-slate-500  font-medium bg-transparent">
        <a className="hover:text:cyan-500 text-amber-500 " href="#">Home</a>
         <a className="hover:text:cyan-500 text-amber-500 " href="#">About</a>
          <a className="hover:text:cyan-500 text-amber-500 " href="#">Deliviery</a>
           <a className="hover:text:cyan-500 text-amber-500 " href="#">Contact</a>

      </nav>
      <div className="flex justify-center space-x-5 transition-transform hover:scale-110 duration-500 ease-in-out transform hover:scale-105">
        <a href=""target="blank"rel="nofollow noopener">
          <Image src="/images/facebook.png" alt="facebook" 
          width={40}
          height={40}/>
        </a>
        <a href="Https://www.instagram.com/muhib_anwar/"target="blank"rel="nofollow noopener">
          <Image src="/images/instagram.png" alt="instagram "
          width={40}
          height={40} />
        </a>
        <a href="https://www.linkedin.com/in/muhibanwar"target="blank"rel="nofollow noopener">
          <Image src="/images/link.png" alt="lindkin"
          width={40}
          height={40}   />
        </a>

      </div>
      <p className="text-center hover:text-cyan-500 text-amber-500 font-medium mb-8 font-italic">MUHIB ANWAR &copy; 2025 All rights reserved</p>
<br/>
<br/>
<br/>
    </footer>
</div>
  );
}
