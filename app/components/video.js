"use client"
export default function Vedio()
{
 return(
  <div className=" md:p-0 p-3 flex flex-col md:flex-row h-auto w-full md:w-[90%] mt-[100px] md:mt-[150px] m-auto">
        {/*put video */}
        <div className=" h-[600px] md:h-[450px] md:w-[50%] md:p-0 p-2 bg-black">
          <iframe className=" md:p-0 p-4 h-full w-full" src="https://www.youtube.com/embed/32T8Oja5Yn4?si=DR4rfSHbAtgoiePE"></iframe>
        </div>
        {/*Opening justify */}
        <div className="-ml-[50px] -mt-[60px] h-[400px]  md:w-[50%]  flex flex-col  items-center">
          <div className=" md:p-0 p-3 md:mt-[20px] mt-[70px] h-auto md:h-[400px] dark:bg-zinc-800 bg-white w-full shadow-2xl ">
            <div className="dark:text-white ml-[60px] md:ml-[50px] mt-[20px] text-4xl font-semibold">
              Opening Hours
            </div>
            <div className=" dark:text-gray-400 text-gray-600 ml-[50px] mt-[20px] md:text-sm">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time Bar opens in the center..
            </div>
            <div className="dark:text-white flex flex-col  md:flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Sunday to Tuesday:
              </div>

              <div className="mt-[13px] hidden md:block">
                _______________________________________________________
              </div>
              <div className="ml-[50px] md:ml-auto mt-[10px] md:mt-[20px]  mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="dark:text-white flex flex-col md:flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Wednesday to Thursday:
              </div>
              <div className="mt-[13px] hidden md:block">
                _______________________________________________________
              </div>
              <div className="ml-[50px] md:ml-auto mt-[10px] md:mt-[20px] mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="dark:text-white flex flex-col md:flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Friday & Saturday:
              </div>
              <div className="mt-[13px] hidden md:block">
                _______________________________________________________
              </div>

              <div className="ml-[50px] md:ml-auto mt-[10px] md:mt-[20px] mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="dark:text-white flex flex-row">
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
 );
}
{/*function VideoComponent({title})
{
return(
    <div className="mt-[20px] h-auto md:h-[400px] dark:bg-gray-900 bg-white w-full shadow-2xl border-1 border-gray-100">
            <div className="dark:text-white ml-[60px] md:ml-[50px] mt-[20px] text-4xl font-semibold">
              Opening Hours
            </div>
            </div>
)
}*/}
//1