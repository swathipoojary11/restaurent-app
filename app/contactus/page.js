//linked in automatic post api call reasearch on it
import Navbar from "../components/navbarfor";

export default function ContactUs() 
{
  return (
    <div className="h-full md:min-h-screen w-full overflow-x-hidden bg-gray-100">
      <Navbar />
      <div className=" bg-[url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')] flex flex-col h-[250px] md:h-[300px] w-full justify-center items-center text-center text-5xl md:text-5xl font-bold text-white bg-cover object-contain bg-center">
        Contact Us
      </div>

      <div className="flex flex-col md:mt-[70px] md:flex-row h-[1000px]  md:h-[250px] w-full md:w-[900px] md:m-auto  justify-center items-center">
        <div className=" mt-[200px]   md:mt-[1px] ml-auto md:ml-[30px] flex flex-col border-1 bg-gray-200 border-gray-400 h-1/2 md:h-[200px] w-full md:w-[250px] items-center rounded-2xl ">
          <div className="mt-[60px]   md:mt-[10px]  rounded-full bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=256&q=75')]  bg-cover bg-center h-[100px] w-[100px]  md:h-[60px] md:w-[60px]"></div>
          <div className=" mt-[10px] text-3xl md:text-2xl font-bold">
            Hotline
          </div>
          <div className="mt-[10px] md:md-[1px] mb-[30px] text-3xl md:text-sm">
            +4733378901
          </div>
        </div>
        <div className=" mt-[50px]   md:mt-[1px] ml-auto md:ml-[30px] flex flex-col border-1 bg-gray-200 border-gray-400 h-1/2 md:h-[200px] w-full md:w-[250px] items-center rounded-2xl ">
          <div className="mt-[60px]   md:mt-[10px]  rounded-full bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=256&q=75')]  bg-cover bg-center h-[100px] w-[100px]  md:h-[60px] md:w-[60px]"></div>
          <div className=" mt-[10px] text-3xl md:text-2xl font-bold">
            Our Location
          </div>
          <div className="mt-[10px] p-2 md:p-0 md:md-[1px] mb-[30px] text-2xl md:text-sm text-gray-600">
            55 Main Street, The Grand Avenue 2nd Block, New York City
          </div>
        </div>
        <div className=" p-2.5 md:p-0 mt-[50px] md:mt-[1px] ml-auto md:ml-[30px] flex flex-col border-1 bg-gray-200 border-gray-400 h-1/2 md:h-[200px] w-full md:w-[250px] items-center rounded-2xl ">
          <div className="mt-[60px]   md:mt-[10px]  rounded-full bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=256&q=75')]  bg-cover bg-center h-[100px] w-[100px]  md:h-[60px] md:w-[60px]"></div>
          <div className=" mt-[10px] text-3xl md:text-2xl font-bold">
            Official Email
          </div>
          <div className="font-semibold   mt-[10px] p-2 md:p-0 text-3xl md:text-sm">
            info@restan.com
          </div>
        </div>
      </div>
      {/*keep in touch part */}
      <div className="flex flex-col bg-white mt-[200px] md:m-auto h-auto md:h-[500px] w-full md:w-[700px] items-center shadow-2xl shadow-gray-600 rounded-2xl">
        <div className="font-semibold md:font-bold text-3xl md:text-sm text-[#806640] mt-[50px]">
          KEEP IN TOUCH
        </div>
        <div className="font-semibold  md:text-4xl text-3xl mt-[10px]">
          <span className="block md:inline">Send us a</span>{" "}
          <span className="block md:inline"> Message</span>
        </div>

        <div >
          <input
            type="text"
            placeholder="Name"
            className="border-1 bg-gray-100 border-gray-200 rounded-sm p-2 mt-2  w-[290px] md:w-[600px]"
          />
        </div>
        <div className=" flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-100 border-1 border-gray-200 rounded-sm p-2 mt-2 w-[290px]"
          />

          <input
            type="text"
            placeholder="Phone"
            className=" bg-gray-100 md:ml-[15px] border-1 border-gray-200 rounded-sm p-2 mt-2 w-[290px]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Message"
            className=" bg-gray-100 border-1 border-gray-200 rounded-sm p-2 mt-2  h-[200px] md:h-[200px] w-[290px] md:w-[600px]"
          />
        </div>
        <button className="text-lg md:text-[18px] md:mb-0 mb-[60px] py-0.5 hover:text-white hover:bg-black md:rounded-2xl  bg-[#806640] h-[70px] w-[70%] md:h-[40px] md:w-[150px] mt-[100px]  md:mt-[30px] shadow-xs shadow-amber-500">
          Get in Touch
        </button>
      </div>
      {/*vidio component for about us */}
      <div className="  flex flex-col md:flex-row h-auto w-full md:w-[90%] mt-[020px] md:mt-[150px] m-auto">
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
    </div>
  );
}
