"use client"
export default function SpecialCategoryComponent({image,title,subtitle,mobileShow=false})
{
    return(
            <div className={`${mobileShow ? "block" : "hidden md:block"} flex flex-col text-white text-2xl h-auto md:h-[300px] w-full md:w-1/4`}>
              <img
                src={image}
                className="rounded-2xl h-[400px] md:h-[250px] w-full object-cover"
              />
              <div className="font-bold text-2xl md:text-2xl text-amber-400  -mt-[100px] md:-mt-[70px] ml-[40px] md:ml-[10px]">
                {title}
              </div>
              <div className=" ml-[40] md:ml-[10px] text-white font-semibold">
                {subtitle}
              </div>
            </div>
    );
}
//1