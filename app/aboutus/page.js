
"use client"

import Navbar from "../components/navbarfor";


export default function AboutUs()
{
    return(
        < div className="h-full md:min-h-screen w-full overflow-x-hidden">
        <Navbar/>
        {/*object-contain means you want the image to be fully w- displaed ...withou
        crroping*/}
   < div className=" bg-[url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')] flex flex-col h-[250px] md:h-[300px] w-full justify-center items-center text-center text-5xl md:text-5xl font-bold text-white bg-cover object-contain bg-center">
        About Us
      </div>
      <div className=" flex flex-col justify-center  items-center bg-yellow-50 h-[300px] md:h-[300px] w-full">
        <div className=" font-bold text-2xl md:text-sm text-[#806640]   text-center  mt-[50px] md:mt-[50px]">
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
            className="md:h-[300px] p-0.5 md:p-0  ml-0.5  h-[300px] w-full md:w-[350px] "
            src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg"
          />
          <img
            className="hidden md:block h-[300px] ml-[30px] w-[350px] "
            src="https://static.vecteezy.com/system/resources/previews/035/500/785/non_2x/ai-generated-of-beautiful-woman-as-a-waitress-serving-food-in-retro-dining-restaurant-generative-ai-photo.jpg"
          />

          <div className="  border-1 border-gray-100 -mb-[200px] md:-ml-[50px] px-5 flex flex-col bg-white h-auto md:h-[400px] w-full md:w-[600px] bg-amber-100 shadow-2xl shadow-gray-300 ">
            <div className=" font-bold text-3xl md:text-sm text-[#806640] mt-[100px]  md:mt-[50px]">
              ABOUT US
            </div>

            <div className="font-semibold md:font-bold text-4xl md:text-5xl mt-[40px]">
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
            <button className="text-lg md:text-[18px] md:mb-0 mb-[60px] py-0.5 hover:text-white hover:bg-black md:rounded-2xl  bg-[#806640] h-[70px] w-[70%] md:h-[40px] md:w-[150px] mt-[100px]  md:mt-[30px] shadow-xs shadow-amber-500">
              Discover more
            </button>
          </div>
        </div>
      </div>
      {/*vidio component for about us */}
      <div className="  flex flex-col md:flex-row h-auto w-full md:w-[90%] mt-[300px] md:mt-[150px] m-auto">
        {/*put video */}
        <div className=" h-[600px] md:h-[450px] md:w-[50%] md:p-0 p-2 bg-black">dfef</div>
        {/*Opening justify */}
         <div className="-ml-[50px] -mt-[60px] h-[400px]  md:w-[50%]  flex flex-col  items-center">
          <div className="mt-[20px]  h-auto md:h-[400px] bg-white w-full shadow-2xl border-1 border-gray-100">
            <div className="ml-[60px] md:ml-[50px] mt-[20px] text-4xl font-semibold">
              Opening Hours
            </div>
            <div className=" text-gray-600 ml-[50px] mt-[20px] md:text-sm">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The 
              Patio Time Bar opens in the center..
            </div>
            <div className="flex flex-col  md:flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Sunday to
                Tuesday:</div>
                
                 <div className="mt-[13px] hidden md:block">_______________________________________________________
              </div>
              <div className="ml-[50px] md:ml-auto mt-[10px] md:mt-[20px]  mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Wednesday to
                Thursday:
                </div>
                 <div className="mt-[13px] hidden md:block">_______________________________________________________
              </div>
              <div className="ml-[50px] md:ml-auto mt-[10px] md:mt-[20px] mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Friday &
                Saturday:</div>
                 <div className="mt-[13px] hidden md:block">_______________________________________________________
              </div>
              
              <div className="ml-[50px] md:ml-auto mt-[10px] md:mt-[20px] mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[60px] w-[60px]   mt-[10px] ml-[30px] rounded-full text-[#806640]"></div>
              <div className="mt-[20px] ml-[50px] text-sm ">
                Call Anytime
                <br />
                <span className=" text-lg font-semibold"> +964733-378901</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center h-auto w-full bg-yellow-50">
        {/*<div className=" font-bold text-sm text-yellow-800 mt-[50px]">
          MASTER CHEF
        </div>
        <div className="font-semibold text-6xl mt-[20px]">
          Meet Our Special Chefs
        </div>
        <div className="mt-[50px]  flex flex-row h-[350px] w-full bg-amber-400">
          <div className="absolute top-[-50px] left-[-50px] h-[300px] w-[300px] rounded-full bg-amber-700">
            <div className="relative m-auto h-[200px] w-[200px] rounded-full bg-amber-100 overflow-hidden">
            
            </div>
          </div>
        </div>*/}
      </div>
      </div>
    );

    }
