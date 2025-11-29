
"use client"
import Fastdeliver from "./fastdelivery";
import BookTable from "../components/booking";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import MenuCardMEnu from "./menucard";
import FooterComponent from "../components/footer";
export default function Menu()
{
  const mainImg="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    return(
         < div className="dark:bg-black  h-full md:min-h-screen w-full overflow-x-hidden">
           <Navbar/>
        <Hero
        backgroundImage={mainImg}
        title="Restaurent menu"
        subtitle="Home"
      />

      {/*menu category component */}
      <div className="flex flex-col  md:m-auto h-auto w-full  j items-center">
       <div className=" font-bold text-3xl md:text-md text-[#806640] mt-[100px]  md:mt-[50px]">
          CATEGORY
        </div>
        <div className=" font-semibold  md:text-center-none text-center text-3xl text-wrap  w-[80%] md:w-full md:text-6xl mt-[50px] dark:text-white  md:mt-[20px]">
          Choose Your Best Food
        </div>
        
       <div className="  md:mt-[50px]  flex flex-col md:flex-row h-auto w-[90%] ">
          {/* 2 image   h-[1500px] md:h-[450px] md:w-1/4">  */}
         <div className="space-x-2 md:mt-[50px]  flex flex-col md:flex-row h-auto w-[90%] ">
           <MenuCardMEnu img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75" rating=" 5.0" title="Pizza Slice" desc="Cheese, Ham & Pineapple"/>
           <MenuCardMEnu img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75" rating=" 4.0" title="Cheese Burger" desc="Cheese, Ham & Pineapple"/>
           <MenuCardMEnu img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75" rating=" 3.0" title="Chocalate Chip" desc="Cheese, Ham & Pineapple"/>
           <MenuCardMEnu img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75" rating=" 5.0" title="MeatBalls Pasta" desc="Cheese, Ham & Pineapple"/>
         </div>
         
       </div>
      <Fastdeliver/>
      <div className="md:h-[600px] flex flex-col  items-center w-full dark:bg-zinc-800 dark:text-wh bg-amber-50">
        <div className=" font-bold text-md dark:text-yellow-500 text-yellow-800 mt-[50px]">
          HAPPY CUSTOMES
        </div>
        <div className=" dark:text-white font-semibold text-3xl mt-[20px]">
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
          <div className=" dark:text-white md:ml-[100px] flex items-center flex-col">
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
            <div className="dark:text-white ml-[20px] md:ml-[0px] mt-[30px] text-black text-2xl">
              Matthew J. Wyman
              <br />
              <span className="dark:text-white mt-[30px] font-bold text-sm  text-yellow-800 mt-[50px]>SENIOR CONSULTANT">
                SENIOR CONSULTANT
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:border-1 dark:border- mt-[100px] flex md:flex-row  md:h-[500px] flex-col w-full  bg-blue-950">
        <div>
          <div className="mt-[100px] text-2xl font-semibold text-white ">RESERVATION </div>
          <div className="mt-[50px]  text-4xl text-white font-semibold">
            Reservation Your Favorite <br />
            Private Table
          </div>
          <div className="mt-[50px] dark:text-white text-sm font-semibold">
            A relaxing and pleasant atmosphere, good jazz, dinner, and
            cocktails. The Patio Time Bar
            <br />
            opens in the center of Florence. The only bar inspired by the 1960s,
            it will give you a <br />
            experience that you’ll have a hard time forgetting.
          </div>
          <div className="dark:text-white flex flex-row">
            <div className="text-2xl mt-[30px]  ">Launch Menu|</div>
            <div className="text-2xl mt-[30px]">Dinner Menu</div>{" "}
          </div>
        </div>
        <BookTable/>
      </div>
      <FooterComponent/>
    </div>
    </div>
    );
}