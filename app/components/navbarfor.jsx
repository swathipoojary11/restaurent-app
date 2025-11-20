"use client"
//import Link from "next/link"
import { useRouter } from 'next/navigation'
export default function Navbar()
{ 
    const router = useRouter();
    return(
<nav className="flex justify-center items-center  py-5 bg-zinc-700 text-gray-900 font-semibold shadow-md">
        
        {/*<NavButton title="Home" path="/menu"/>
        <NavButton title="About us" path="/aboutus"/>
        <img className="md:h-[40px] h-[150px]"
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
        /> 
        <NavButton title="Menu" path="/menu"/>
        <NavButton title="Contact" path="/contactus"/>*/}
        <img
          className="md:h-[40px] h-[70px]"
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
        />
        <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
          router.push(`/menu`)}}>Home</button>
         
        <button  type='button'  className="hidden md:block mr-[30px] "onClick={(event)=>{
          router.push(`/aboutus`)
        }}>About</button>
        
        <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
          router.push(`/menu`)}}>Menu</button>
        <button type='button' className="hidden md:block mr-[30px]" onClick={(event)=>{
          router.push(`/contactus`)}}>Contact</button>
      </nav>
)
}