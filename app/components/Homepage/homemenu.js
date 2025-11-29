"use client "
export default function HomeMenu({image,rating,price,discount,title,otheritems})
{
    return(
        
        <div className=" dark:text-white dark:bg-zinc-800 dark:border-1 dark:border-amber-300 border-gray-300 border-1 mt-[50px] rounded-2xl flex flex-col h-[450px] md:w-1/4 bg-white">
          {/*image section */}
          <img className="rounded-2xl h-[50%] w-full"src={image}/>
          {/*price tag */}
          <div className="  items-center flex flex-row dark:bg-zinc-800 dark:bg-gray-400 bg-white h-[15%] w-[60%] rounded-r-2xl -mt-[40px]">
            <div className=" ml-[30px] text-gray-500 font-bold">{rating}</div>
            <div className=" ml-[30px]   text-2xl text-yellow-700 font-bold">
              <span className=" text-gray-700 font-bold text-sm">${price}</span>
              ${discount}
            </div>
          </div>
          <div className="dark:text-white  hover:text-yellow-700 mt-[30px] ml-[30px] text-3xl font-semibold text-gray-900 ">
            {title}
          </div>
          <div className=" mt-[40px] flex flex-row">
            {/*we used map metod just for the list of items sso that react ui updates very fast */}
            {otheritems.map((item,index)=>(
            <div key={index} className=" ml-[30px] text text-gray-600 "> {item}*</div>
            ))}
          </div>
          <button className=" dark: bg-[#806640] hover:text-white hover:bg-yellow-800 mb-[10] ml-[20px] h-[40px] w-[300px] mt-[30px] border-2 border-amber-950 rounded-3xl">
            Add to cart
          </button>
        </div>

        
    )
}
//1