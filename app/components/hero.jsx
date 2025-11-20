

import ReactCurvedText from 'react-curved-text';
export default function Hero()
{
return(<div className=" bg-[url('https://restan-nextjs.vercel.app/assets/img/banner/14.jpg')] 
relative w-full justify-center items-center text-center text-5xl md:text-5xl font-bold text-white bg-cover object-contain bg-center h-[500px] md:h-[90vh] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className=" text-5xl md:text-7xl font-bold  mb-[10px]  md:mb-6">Best Restaurant</h1>
          <div className="curve-text w-[300px] h-[300px]  md:border-2 border-4 border-yellow-500 rounded-full md:w-[150px] md:h-[150px] mx-auto flex items-center justify-center text-center text-3xl md:text-sm tracking-wider mt-[50px] md:mt-[0px]">
            <p>BEST FOOD SINCE 1865</p>
          </div>
        </div>
      </div>
)
}