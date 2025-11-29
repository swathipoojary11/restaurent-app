"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import {useEffect,useState} from 'react';
export default function HomepageNavbar()

{ 
    const router = useRouter();
    return(
 <nav className="flex justify-center items-center  py-5 dark:text-white dark:bg-zinc-800 bg-zinc-700 text-gray-900 font-semibold shadow-md">





<button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
          router.push(`/`)}}>Home</button>
         
       <button  type='button'  className="hidden md:block mr-[30px] "onClick={(event)=>{
          router.push(`/aboutus`)
      }}>About</button>
      <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
          router.push(`/blog`)}}>Blog</button>
        <img
          className="md:h-[40px] h-[70px]"
         src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
      />

    
       <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
router.push(`/menu`)}}>Menu</button>
    <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
         router.push(`/contactus`)}}>Contact</button>
         <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
          router.push(`/shop`)}}>Shop</button>
          
      </nav>
)
}
//1