
"use client"
import Navbar from "../components/navbarfor";
export default function Menu()
{
    return(
         < div className="h-full md:min-h-screen w-full overflow-x-hidden">
           <Navbar/>
        < div className=" bg-[url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')] flex flex-col h-[300px] md:h-[300px] w-full justify-center items-center text-center text-3xl md:text-5xl font-bold text-white bg-cover object-contain bg-center">
             Restaurant Food Menu
           </div>

      {/*menu category component */}
      <div className="flex flex-col  md:m-auto h-auto w-full  j items-center">
        <div className=" font-bold text-3xl md:text-md text-[#806640] mt-[100px]  md:mt-[50px]">
          CATEGORY
        </div>
        <div className=" font-semibold  md:text-center-none text-center text-3xl text-wrap  w-[80%] md:w-full md:text-6xl mt-[50px]  md:mt-[20px]">
          Choose Your Best Food
        </div>
        <div className=" flex flex-col md:flex-row h-auto w-[90%] ">
          {/* 2 image   h-[1500px] md:h-[450px] md:w-1/4">  */}
          <div className=" m rounded-2xl flex flex-col  bg-white border-1 border-gray-200 h-[550px] md:h-[450px] md:w-1/4">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row md:h-[70px] w-full  ">
              <div className="flex w-1/2 md:mt-[0px] mt-[30px] h-[80px] md:h-full items-center rounded-r-full md:rounded-r-4xl bg-gray-200 border-1 border-gray-500">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px]  rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center md:ml-[60px] m-auto  text-4xl md:text-3xl font-bold text-black md:mt-[0px] mt-[50px]">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700 mt-[30px]  md:mt-[20px] font-semibold text-2xl md:text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[30px] md:mt-[20px] ml-[40px] text-2xl md:text-sm text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[30px] md:mt-[20px] ml-[10px]  md:-ml-[40px] text-2xl  font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
          {/*2nd block */}
         <div className=" m rounded-2xl flex flex-col  bg-white border-1 border-gray-200 h-[550px] md:h-[450px] md:w-1/4 md:mt-[0px] mt-[30px]">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row md:h-[70px] w-full  ">
              <div className="flex w-1/2 md:mt-[0px] mt-[30px] h-[80px] md:h-full items-center rounded-r-full md:rounded-r-4xl bg-gray-200 border-1 border-gray-500">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px]  rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center md:ml-[60px] m-auto  text-4xl md:text-3xl font-bold text-black md:mt-[0px] mt-[50px]">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700 mt-[30px]  md:mt-[20px] font-semibold text-2xl md:text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[30px] md:mt-[20px] ml-[40px] text-2xl md:text-sm text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[30px] md:mt-[20px] ml-[10px]  md:-ml-[40px] text-2xl  font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
          {/*3nd block */}
          <div className=" m rounded-2xl flex flex-col  bg-white border-1 border-gray-200 h-[550px] md:h-[450px] md:w-1/4 md:mt-[0px] mt-[30px]">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row md:h-[70px] w-full  ">
              <div className="flex w-1/2 md:mt-[0px] mt-[30px] h-[80px] md:h-full items-center rounded-r-full md:rounded-r-4xl bg-gray-200 border-1 border-gray-500">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px]  rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center md:ml-[60px] m-auto  text-4xl md:text-3xl font-bold text-black md:mt-[0px] mt-[50px]">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700 mt-[30px]  md:mt-[20px] font-semibold text-2xl md:text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[30px] md:mt-[20px] ml-[40px] text-2xl md:text-sm text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[30px] md:mt-[20px] ml-[10px]  md:-ml-[40px] text-2xl  font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
          {/*4nd block */}
          <div className=" m rounded-2xl flex flex-col  bg-white border-1 border-gray-200 h-[550px] md:h-[450px] md:w-1/4 md:mt-[0px] mt-[30px]">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row md:h-[70px] w-full  ">
              <div className="flex w-1/2 md:mt-[0px] mt-[30px] h-[80px] md:h-full items-center rounded-r-full md:rounded-r-4xl bg-gray-200 border-1 border-gray-500">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px]  rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] md:h-[35px] md:w-[35px] w-[50px] h-[50px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center md:ml-[60px] m-auto  text-4xl md:text-3xl font-bold text-black md:mt-[0px] mt-[50px]">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700 mt-[30px]  md:mt-[20px] font-semibold text-2xl md:text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[30px] md:mt-[20px] ml-[40px] text-2xl md:text-sm text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[30px] md:mt-[20px] ml-[10px]  md:-ml-[40px] text-2xl  font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-[60px] flex flex-row h-[600px] md:h-[500px] w-full bg-red-950 items-center ">
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
      <div className="md:h-[600px] flex flex-col  items-center w-full bg-amber-50">
        <div className=" font-bold text-md  text-yellow-800 mt-[50px]">
          HAPPY CUSTOMERS
        </div>
        <div className=" font-semibold text-3xl mt-[20px]">
          Our Customers Feedback
        </div>
        <div className="  mt-[30px]  items-center flex flex-col md:flex-row">
          <div className=" h-[50%] w-[50%] md:h-[400px]  md:w-[400px]">
            <img
              className="  rounded-2xl"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"
            />
          </div>
          {/*text section */}
          <div className=" md:ml-[100px] flex items-center flex-col">
            <div className="text-gray-500">(5/5)</div>
            <div className="ml-[20px] md:ml-[0px] text-3xl font-semibold mt-[10px]">
              The best food ever
            </div>
            <div className="ml-[20px] md:ml-[0px] text-gray-600 mt-[20px] ">
              Targeting consultation discover apartments.ndulgence off
              <br />
              under folly death wrote cause her way spite.Plan upon yet
              <br />
              way get cold spot its week.almost do am or limits hearts
              <br />
              Resolve parties but why she shewing.
            </div>
            <hr />
            <div className="ml-[20px] md:ml-[0px] mt-[30px] text-black text-2xl">
              Matthew J. Wyman
              <br />
              <span className="mt-[30px] font-bold text-sm  text-yellow-800 mt-[50px]>SENIOR CONSULTANT">
                SENIOR CONSULTANT
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-600 mt-[100px] flex md:flex-row  md:h-[500px] flex-col w-full">
        <div>
          <div className="mt-[100px] text-2xl font-semibold text-white ">RESERVATION </div>
          <div className="mt-[50px]  text-4xl text-white font-semibold">
            Reservation Your Favorite <br />
            Private Table
          </div>
          <div className="mt-[50px] text-white text-sm font-semibold">
            A relaxing and pleasant atmosphere, good jazz, dinner, and
            cocktails. The Patio Time Bar
            <br />
            opens in the center of Florence. The only bar inspired by the 1960s,
            it will give you a <br />
            experience that you’ll have a hard time forgetting.
          </div>
          <div className="text-white flex flex-row">
            <div className="text-2xl mt-[30px]  ">Launch Menu|</div>
            <div className="text-2xl mt-[30px]">Dinner Menu</div>{" "}
          </div>
        </div>
        <div className=" md:mt-[0px] mt-[200px]  md:ml-[100px] -translate-y-1/4  bg-zinc-900  text-white md:w-[400px] rounded-3xl shadow-2xl px-8 py-10">
          

          <h2 className="text-3xl font-semibold mb-8 text-center mt-4">
            Book a table
          </h2>

          <form className="flex flex-col space-y-4">
            <input
              type="tel"
              placeholder="Phone"
              className= " text-white w-full px-3 py-2 border border-gray-300 rounded-lg "
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
      </div>
    </div>
    );
}