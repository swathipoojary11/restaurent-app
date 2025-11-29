"use client";
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [navColor, setNavColor] = useState(false);
const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-20 transition-all duration-300 ${
        navColor ? "bg-[#383838]" : "bg-transparent mt-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 text-white">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            className="h-10 w-auto sm:h-14"
            alt="Logo"
          />
        </div>

        {/* Desktop menu (hidden on small screens) */}
        <nav className="hidden items-center gap-6 text-sm font-semibold sm:flex sm:text-base">
          <button onClick={(event)=>{router.push(`/`)}}>HOME</button>
          <button onClick={(event)=>{router.push(`/blog`)}}>BLOG</button>
          <button onClick={(event)=>{router.push(`/contactus`)}}>CONTACT US</button>
          <button onClick={(event)=>{router.push(`/aboutus`)}}>ABOUT US</button>
          <button onClick={(event)=>{router.push(`/menu`)}}>MENU</button>
          <button onClick={(event)=>{router.push(`/shop`)}}>SHOP</button>
          

          
          <button className="rounded-full bg-[#6a753abf] px-4 py-2 font-bold hover:text-[#9d7c54]">
            Reservation
          </button>
        </nav>

        {/* Mobile button (shows only on small screens) */}
        <button className="rounded-full bg-[#6a753abf] px-4 py-2 text-sm font-semibold sm:hidden">
          MENU
        </button>
      </div>
    </header>
  );
}
// "use client"

// import { useRouter } from 'next/navigation'
// export default function Navbar()
// { 
//     const router = useRouter();
//     return(
// <nav className="flex justify-center items-center  py-5 dark:text-white dark:bg-zinc-800 bg-zinc-700 text-gray-900 font-semibold shadow-md">
//         <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
//           router.push(`/`)}}>Home</button>
         
//         <button  type='button'  className="hidden md:block mr-[30px] "onClick={(event)=>{
//           router.push(`/aboutus`)
//         }}>About</button>
//         <img
//           className="md:h-[40px] h-[70px]"
//           src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
//         />
//         <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
//           router.push(`/menu`)}}>Menu</button>
//         <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
//           router.push(`/contactus`)}}>Contact</button>
//       </nav>
// )
// }



