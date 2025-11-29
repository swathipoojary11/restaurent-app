//linked in automatic post api call reasearch on it
import Navbar from "../components/navbar";
import Vedio from "../components/video";
import Hero from "../components/hero";
import InforCard from "./InfoCard";
import FooterComponent from "../components/footer";

export default function ContactUs() 
{
  const mainImg="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
  return (
    <div className="bg-gray-50 dark:bg-black  h-full md:min-h-screen w-full overflow-x-hidden bg-gray-100">
      <Navbar/>
      
      <Hero
        backgroundImage={mainImg}
        title="Contact us"
        subtitle="Home"
      />

      <div className="space-y-1.5 flex flex-col md:mt-[70px] md:flex-row h-[1000px]  md:h-[250px] w-full md:w-[900px] md:m-auto  justify-center items-center">
        <InforCard backgroundImage="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=256&q=75" title="  Hotline" description=" +4733378901"/>
        <InforCard backgroundImage="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75" title="  Our Location" description="55 Main Street, The Grand Avenue 2nd Block, New York City"/>
        <InforCard backgroundImage="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75" title=" Official Email" description=" info@restan.com"/>
      </div>
      {/*keep in touch part */}
      <div className=" dark:bg-zinc-900 flex flex-col bg-white mt-[300px] md:mt-[200px] md:m-auto h-auto md:h-[500px] w-full md:w-[700px] items-center shadow-2xl dark:shadow-2xs dark:border-1 dark:border-white shadow-gray-600 rounded-2xl">
        <div className="font-semibold md:font-bold text-3xl md:text-sm text-[#806640] mt-[50px]">
          KEEP IN TOUCH
        </div>
        <div className=" dark:text-white font-semibold  md:text-4xl text-3xl mt-[10px]">
          <span className="block md:inline">Send us a</span>{" "}
          <span className="block md:inline"> Message</span>
        </div>

        <div >
          <input
            type="text"
            placeholder="Name"
            className="border-1 dark:bg-zinc-600 dark:text-white text-black  bg-gray-100 border-gray-200 rounded-sm p-2 mt-2  w-[290px] md:w-[600px]"
          />
        </div>
        <div className="  flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Email"
            className="dark:bg-zinc-600 dark:text-white  bg-gray-100 border-1 border-gray-200 rounded-sm p-2 mt-2 w-[290px]"
          />

          <input
            type="text"
            placeholder="Phone"
            className="dark:bg-zinc-600 dark:text-white  bg-gray-100 md:ml-[15px] border-1 border-gray-200 rounded-sm p-2 mt-2 w-[290px]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Message"
            className="dark:bg-zinc-600 dark:text-white  bg-gray-100 border-1 border-gray-200 rounded-sm p-2 mt-2  h-[200px] md:h-[200px] w-[290px] md:w-[600px]"
          />
        </div>
        <button className="text-lg md:text-[18px] md:mb-0 mb-[60px] py-0.5 hover:text-white hover:bg-black md:rounded-2xl  text-white bg-[#806640] h-[70px] w-[70%] md:h-[40px] md:w-[150px] mt-[100px]  md:mt-[30px] shadow-xs shadow-amber-500">
          Get in Touch
        </button>
      </div>
      <Vedio/>
      <FooterComponent/>
    </div>
  );
}
