"use client ";
export default function MenuCardMEnu({ img, rating, title, desc }) {
  return (
    
     
        <div className="  rounded-2xl flex flex-col dark:bg-zinc-900 dark:text-white bg-white border-1 border-gray-200 h-[550px] md:h-[450px] md:w-1/4">
          <img className="dark:brightness-50  rounded-t-2xl" src={img} />
          <div className="flex flex-row md:h-[70px] w-full  ">
            <div className="dark:bg-zinc-600 flex w-1/2 md:mt-[0px] mt-[30px] h-[80px] md:h-full items-center rounded-r-full md:rounded-r-4xl bg-gray-200 border-1 border-gray-500">
              <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px]  rounded-full bg-amber-500"></div>
              <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
              <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
            </div>
            <div className="flex  dark:text-white items-center md:ml-[60px] m-auto  text-4xl md:text-3xl font-bold text-black md:mt-[0px] mt-[50px]">
              {rating}
            </div>
          </div>
          <div className=" hover:text-yellow-700 mt-[30px]  md:mt-[20px] font-semibold text-2xl md:text-2xl ml-[40px]">
            {title}
          </div>
          <div className="mt-[30px] md:mt-[20px] ml-[40px] text-2xl md:text-sm text-gray-500">
            {desc}
          </div>
          <button className="mt-[30px] md:mt-[20px] ml-[10px]  md:-ml-[40px] text-2xl  font-bold text-yellow-700">
            ORDER NOW
          </button>
        </div>
     
  );
}
