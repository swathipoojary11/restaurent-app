"use client"
export default function BookTable()
{
    return(

        <div className=" md:mt-[0px] mt-[200px]  md:ml-[100px] -translate-y-1/4 bg-white dark:bg-zinc-800 text-black dark:text-white md:w-[400px] rounded-3xl shadow-2xl px-8 py-10">
          <div className="absolute -top-20 md:-top-8 left-1/2 -translate-x-1/2 bg-[#806640] h-[80px] md:h-[70px] w-[80px] md:w-[70px] rounded-full flex items-center justify-center">
            <span className="text-3xl md:text-2xl text-white"></span>
            
          </div>

          <h2 className="text-3xl font-semibold mb-8 text-center mt-4">
            Book a table
          </h2>

          <form className="flex flex-col space-y-4">
            <input
              type="tel"
              placeholder="Phone"
              className= "text-black dark:text-white w-full px-3 py-2 border border-gray-300 rounded-lg "
            />
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 ">
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
            </select>
            <input
              type="date"
              placeholder="Date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg "
            />
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 ">
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>7:00 PM</option>
            </select>
            <button
              type="submit"
              className="w-[70%] md:w-full bg-[#806640] text-white rounded-lg py-2 font-semibold hover:bg-black "
            >
              Book Now
            </button>
          </form>
        </div>
    );
} 