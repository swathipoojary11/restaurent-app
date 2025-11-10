export default function Navbar()
{ 
    
    return(
<nav className="flex justify-center items-center  py-5 bg-zinc-700 text-gray-900 font-semibold shadow-md">
        <div className="hidden md:block mr-[30px]">Home</div>
        <div className="hidden md:block mr-[30px]">About</div>
        <img
          className="md:h-[40px] h-[150px]"
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
        />
        <div className="hidden md:block mr-[30px] ml-[30px]">Menu</div>
        <div className="hidden md:block mr-[30px]">Contact</div>
      </nav>
)
}