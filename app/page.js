import HeroHome from "./components/Homepage/homehero";

import HomeNavbar from "./components/Homepage/homenavbar";
import ContactUs from "./contactus/page";
import FooterComponent from "./components/footer";
import SpecialCategoryComponent from "./components/Homepage/specialcategory";
import Qualitycard from "./components/Homepage/qualitycard";
import Contact from "./components/Homepage/contact";
import HomeMenu from "./components/Homepage/homemenu";
import Vedio from "./components/video";
import BookTable from "./components/booking";
export default function Home()
 {
  return (
    <div className="h-full md:min-h-screen w-full overflow-x-hidden dark:bg-zinc-900 bg-gray-100">
      <Contact />
      <HomeNavbar />
      <HeroHome />
      
      <div className="md:mt-[0px] -mt-[20px] md:p-0 p-5 flex flex-col md:flex-row ">
      <BookTable/>
        {/*right div */}
        <div className=" md:mt-[1px] mt-[40px]  md:ml-[50px] flex flex-col h-auto md:h-[500px] md:w-[70%] ">
          <div className="dark:text-white md:mt-[40px] ml-[50px] text-black text-5xl md:text-3xl font-semibold  md:w-full">
            Our Popular category
          </div>
          {/* The row of cards */}
          <div className=" md:p-0 p-2 flex  flex-col md:flex-row mt-[30px] md:ml-[50px] gap-6">
            {/* Card 1 */}
            <SpecialCategoryComponent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75" title="Desserts" subtitle="Cake" mobileShow={true}/>
            {/*card 2 */}
            <SpecialCategoryComponent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F20.jpg&w=1920&q=75" title="Drinks"   subtitle="Mocktail"/>
             {/* Card 3 */}
            <SpecialCategoryComponent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F10.jpg&w=1920&q=75" title="Chats"   subtitle="Panipuri"/>
          </div>
        </div>
      </div>
      {/*Quality card  */}
      <div className="space-y-2 md:p-0 p-3 flex flex-col md:flex-row mt-[20px] md:mt-[0px]  h-auto md:h-[400] w-full  justify-center ">
       <Qualitycard image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75" 
                    title=" Quality Food"
                    description="Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated."
                    />
        <Qualitycard image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75" 
                    title="Fast Delivery"
                    description="Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated."/>
        <Qualitycard image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75" 
                    title="Delicious Recipes"
                    description="Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated."/>
        </div>
      {/*menu page no component here*/}

      <div className=" md:p-0 p-4  items-center w-full h-auto flex flex-col">
        <div className=" dark:text-white font-bold text-2xl md:text-lg text-yellow-800 mt-[100px] md:mt-[40px]">
          FOOD MENU
        </div>
        <div className="dark:text-white font-semibold text-4xl md:text-4xl text-black mt-[30px] text-center w-full md:w-auto">
          Our Specials Menu
        </div>
        <div className="dark:text-white  md:border-2 m md:border-gray-400 rounded-2xl md:rounded-sm h-auto md:h-[70px] w-full  md:w-[600px] flex flex-col md:flex-row mt-[10px] justify-center items-center">
          <div className=" border-gray-400 text-center text-2xl md:text-sm mt-[70px] rounded-2xl md:mt-[1px] h-[70px] md:h-[auto] w-full  md:w-auto  md:border-0 border-2 md:border-b-gray-30 md:ml-[30px] hover:text-white hover:rounded-sm  hover:h-[40px] hover:bg-amber-900">
            MAIN DISHES
          </div>
          <div className=" border-gray-400 text-center text-2xl md:text-sm mt-[10px] rounded-2xl md:mt-[1px] h-[70px] md:h-[auto] w-full  md:w-auto  md:border-0 border-2 md:border-b-gray-30 md:ml-[30px] hover:text-white hover:rounded-sm  hover:h-[40px] hover:bg-amber-900">
            MAIN DESSERT{" "}
          </div>
          <div className=" border-gray-400 text-center text-2xl md:text-sm mt-[10px] rounded-2xl md:mt-[1px] h-[70px] md:h-[auto] w-full  md:w-auto  md:border-0 border-2 md:border-b-gray-30 md:ml-[30px] hover:text-white hover:rounded-sm  hover:h-[40px] hover:bg-amber-900">
            SEA FOOD{" "}
          </div>
          <div className=" border-gray-400 text-center text-2xl md:text-sm mt-[10px] rounded-2xl md:mt-[1px] h-[70px] md:h-[auto] w-full  md:w-auto  md:border-0 border-2 md:border-b-gray-30 md:ml-[30px] hover:text-white hover:rounded-sm  hover:h-[40px] hover:bg-amber-900">
            BEVEAGE
          </div>
        </div>
      </div>
      <div className=" space-x-2 md:p-0 p-4 mt-[500px] md:mt-[50px] flex flex-col md:flex-row h-[500px] w-full  justify-center">
        <HomeMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75" rating="4.9(5.7K)" price="35"discount="34" title="Braised Chicken legs"otheritems={["4 Chicken","legChilli","Drinks"]}/>
        <HomeMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75" rating="4.9(5.7K)" price="35"discount="34" title="Bone Steak"otheritems={["4 Chicken","legChilli","Drinks"]}/>
        <HomeMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75" rating="4.9(5.7K)" price="35"discount="34" title="Fish Tacos"otheritems={["4 Chicken","legChilli","Drinks"]}/>
      </div>
      
      {/*menu section 2 */}
      <div className="md:p-0 p-3 mt-[50px] ">
      <div className="  mt-[500px] md:m-auto md:mt-[100px] text-white rounded-4xl h-auto  md:h-[600px] md:w-[1000px] bg-black flex flex-col md:flex-row items-center">
        <div className=" md:h-auto  md:w-[50%]">
          <img
            className="- md:h-[500px] md:w-[80%]"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
          />
        </div>
        {/*Text section */}
        <div className=" md:ml-[50px] flex flex-col text-white w-[70%]">
          <div className="text-4xl md:text-5xl text-wrap font-semibold">
            Are you Ready to Start
             your online Order?
          </div>
          <div className=" text-wrap text-gray-400 text-xl md:text-sm mt-[40px]  md:mt-[30px]">
            Bndulgence diminution so discovered mr apartments. Are off under
            folly death
         
            wrote cause her way spite. Plan upon yet way get cold spot its week.
            Almost do am
           
            or limits hearts. Resolve parties but why she shewing. She sang know
            now
          </div>
          <div className=" mt-[100px] md:mt-[50px] flex flex-col  md:flex-row items-center j">
            <button className=" text-2xl md:text-[15px] md:mb-[1px] mt-[1px] rounded-3xl  items-center justify-center p-[10px] flex h-[70px] md:h-[50px] w-[200px] md:w-[150px]  hover:border-2 hover:border-white hover:text-white hover:bg-black bg-yellow-50 text-black">
              App store
            </button>
            <button className=" text-2xl md:text-[15px] mb-[80] md:mb-[1px] mt-[60px] md:mt-[1px] rounded-3xl items-center justify-center p-[10px] flex h-[70px] md:h-[50px] w-[200px] md:w-[150px] md:ml-[50px] hover:text-black hover:bg-white w-[150px] bg-yellow-600 text-black">
              Play store
            </button>
          </div>
        
      </div>
  </div>
  
      </div>
      <Vedio/>
      <FooterComponent />
    </div>
  );
}
