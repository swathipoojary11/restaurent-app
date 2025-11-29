"use client"
export default function Qualitycard({title,image,description}){
    return(

        <div className=" dark:border-amber-400 md:p-2 p-5  border-2 md:border-t-2 md:border-r-2  border-gray-400  rounded-3xl md:rounded-t-3xl flex flex-col h-[400] md:h-[350px] md:w-[400px]  justify-center ">
          <div>
            <img
              className="h-[70px] w-[70px]"
              src={image}
            />
          </div>
          <div className="dark:text-white font-bold text-3xl md:text-2xl text-black mt-2 ml-2">
            {title}
          </div>
          <div className="ml-2 text-lg md:text-[18px] text-gray-700 md:mt-0 mt-[30px] text-wrap dark:text-amber-50" >
           {description}
          </div>
        </div>
    );
}
//1