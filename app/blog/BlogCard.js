import React from "react";
 export default function BlogCard({ image, date, author, title, text })
  { return ( <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden mt-30"> 
  {/* Card Image */} 
  <img src={image} alt={title}
   className="w-full h-56 sm:h-72 lg:h-96 object-cover " /> 
  {/* Card Content */}
   <div className="p-6 sm:p-8">
     <p className="text-xs sm:text-sm text-gray-500 mb-2"> 
       {date} • {author} </p> 
     <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">{title}</h3> 
     <p className=" text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{text}</p>
      <button className=" rounded-full bg-[#6a753abf] px-6 py-3 text-sm sm:text-base font-semibold text-white"> READ MORE → </button> 
      </div> 
      </div>
       ); }