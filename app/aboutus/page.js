"use client";
import Vedio from "../components/video";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FooterComponent from "../components/footer";

export default function AboutUs() {
  const mainImg="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
  return (
    
    <div className="bg-gray-200 dark:bg-zinc-900 h-full md:min-h-screen w-full overflow-x-hidden">
      <Navbar />
      {/*object-contain means you want the image to be fully w- displaed ...withou
        crroping*/}
    <Hero
            backgroundImage={mainImg}
            title="About Us"
            subtitle="Home"
          />
      <div className=" flex flex-col h-[300px] md:h-[300px] bg-yellow-50 dark:border-1 dark:bg-zinc-800 dark:border-zinc-800 justify-center  items-center   w-full">
        <div className=" font-bold text-2xl md:text-sm text-[#806640] dark:text-[#82653b]   text-center  mt-[50px] md:mt-[50px]">
          OUR TRUSTED 8K HAPPY PARTNERS
        </div>
        <div className=" m-auto md:mt-[10px] flex flex row  justify-center">
          <img
            className=" hidden md:block h-[200px] w-[200px]  md:h-[100px] md:w-[150px] mt-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=640&q=75"
          />
          <img
            className=" h-1/2 w-[70%]  md:h-[100px] md:w-[150px]  md:ml-[50px] mt-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=640&q=75"
          />
          <img
            className=" h-1/2 w-[70%]  md:h-[100px] md:w-[150px]  ml-[50px] mt-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=640&q=75"
          />
          <img
            className="hidden md:block  h-[100px] w-[150px]   ml-[50px] mt-[40px] "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=640&q=75"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center  ">
        <div className="  items-center flex flex-col md:flex-row h-auto md:h-[600px] w-full ">
          {/*use compoment  */}
          <img
            className=" dark:border-white dark:border-2 md:h-[300px] p-0.5 md:p-0  ml-0.5  h-[300px] w-full md:w-[350px] "
            src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg"
          />
          <img
            className="dark:border-white dark:border-2 hidden md:block h-[300px] ml-[30px] w-[350px] "
            src="https://static.vecteezy.com/system/resources/previews/035/500/785/non_2x/ai-generated-of-beautiful-woman-as-a-waitress-serving-food-in-retro-dining-restaurant-generative-ai-photo.jpg"
          />

          <div className="   -mb-[200px] md:-ml-[50px] px-5 flex flex-col bg-white dark:bg-zinc-800 h-auto md:h-[400px] w-full md:w-[600px] bg-amber-100 shadow-2xl  dark:shadow-2xs dark:shadow-zinc-800 shadow-gray-300 ">
            <div className=" font-bold text-3xl md:text-sm  text-[#806640] mt-[100px]  md:mt-[50px]">
              ABOUT US
            </div>

            <div className=" text-black dark:text-white font-semibold md:font-bold text-4xl md:text-5xl mt-[40px]">
              We Invite You
              <br />
              To Visit Our Restaurant
            </div>
            <div className="w-full leading-relaxed text-zinc-500 text-2xl  md:text-[11px] mt-[60px] md:mt-[20px] px-1 md:px-0">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time Bar opens in the center of Florence. The
              only bar inspired by the 1960s, it will give you a experience that
              you’ll have a hard time forgetting.
            </div>
            <button className="dark:text-white text-lg md:text-[18px] md:mb-0 mb-[60px] py-0.5 hover:text-white hover:bg-black  dark:hover:text-black dark:hover:bg-white md:rounded-2xl  bg-[#806640] h-[70px] w-[70%] md:h-[40px] md:w-[150px] mt-[100px]  md:mt-[30px] shadow-xs shadow-amber-500">
              Discover more
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-0 mb-[100px]">
     <Vedio/>
     </div>
     <FooterComponent/>
    </div>
  );
}
