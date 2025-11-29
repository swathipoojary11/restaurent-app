"use client "
export default function HeaderNext({title})
{
  return(
    <div
        className=" bg-[url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')]  flex flex-col
        h-[250px] md:h-[300px]
        text-5xl md:text-5xl
        w-full
        justify-center
        items-center
        text-center 
        font-bold
      text-white
        bg-cover 
        object-contain 
        bg-center"
      >
        {title}
      </div>
  );
}
//For other pages.1