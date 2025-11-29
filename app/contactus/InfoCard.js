"use client"
export default function InforCard({backgroundImage,title,description})
{
   
    return(
        
        <div className=" dark:bg-zinc-900  dark:text-white mt-[200px]   md:mt-[1px] ml-auto md:ml-[30px] flex flex-col border-1 bg-gray-200 border-gray-400 h-1/2 md:h-[200px] w-full md:w-[250px] items-center rounded-2xl ">
          <div className="mt-[60px]   md:mt-[10px]  rounded-full  bg-cover bg-center h-[100px] w-[100px]  md:h-[60px] md:w-[60px]"style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          <div className=" mt-[10px] text-3xl md:text-2xl font-bold">
            {title}
          </div>
          <div className="mt-[10px] md:md-[1px] mb-[30px] text-3xl md:text-sm">
            {description}
          </div>
        </div>
    )
}



