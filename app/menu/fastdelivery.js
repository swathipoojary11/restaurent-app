"use client"
export default function Fastdeliver()
{
    return (
        <div className=" bg-amber-950  mt-[60px] flex flex-row h-[600px] md:h-[500px] w-full dark:bg-red-950 items-center ">
        <div className="flex flex-col ">
          <div className=" mt-[50px] ml-[50px] text-5xl w-[60%] text-white">
            30 Minutes
            <br /> Delivery!
          </div>
          <div className="text-amber-50 mt-[30px] ml-[50px]">
            A relaxing and pleasant atmosphere, good jazz, dinner, and
            cocktails. The <br/>
            Patio Time Bar opens in the center of Florence. The only bar
            inspired by the<br/>
            
            1960s, it will give you a experience that you’ll have a hard time
            forgetting.
          </div>
          <button className=" mt-[30px] ml-[50px] bg-yellow-700 text-white hover:text-black hover:bg-white h-[50px] w-[150px] ">
            Order now
          </button>
        </div>
        <div className="  w-[40%] ">
          <img
            className=" ml-[250] mt-[50px] h-[500px]"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"
          />
        </div>
      </div>
    )
}