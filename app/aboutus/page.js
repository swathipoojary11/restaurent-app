export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-gray-100">
      {/*top bar section */}
      <div className="flex bg-zinc-800 h-[40px] w-full items-center">
        <div>
          <img
            className="h-[30px] w-[100px] "
            src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
          />
        </div>
        <button className=" flex bg-green-600 rounded-[10px] h-[30px] w-[70px] ml-auto">
          Buy now
        </button>
      </div>
      {/*Contact section */}
      <div className="flex flex-row justify-between items-center  text-gray-700 text-sm px-10 py-3 border-b border-gray-200">
        <div className="flex gap-6">
          <span>Phone: +47 333 78901</span>
          <span>Email: food@restan.com</span>
        </div>
        <div> 175 10th Street, Office 375 Berlin, De 21562</div>
      </div>
      {/*Navbar section */}
        <nav className="flex justify-center items-center  py-5 bg-zinc-700 text-gray-900 font-semibold shadow-md">
          <div className="mr-[30px]">Home</div>
          <div className="mr-[30px]">About</div>
          <img
            className="h-[40px]"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
          />
        <div className="mr-[30px] ml-[30px]">Menu</div>
        <div className="mr-[30px]">Contact</div>
       
      
       </nav>
      {/*Hero section */}
      <div
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/036/099/980/non_2x/ai-generated-the-luxurious-restaurant-is-neatly-arranged-professionalgraphy-photo.jpg')",
        }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Best Restaurant</h1>
          <div className="border-2 border-white rounded-full w-[150px] h-[150px] mx-auto flex items-center justify-center text-center text-sm tracking-wider">
            <p>
              BEST FOOD SINCE 1865 
            </p>
          </div>
        </div>
        </div>
       
    </div>
  );
}
export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-gray-100">
      {/*top bar section */}
      <div className="flex bg-zinc-800 h-[40px] w-full items-center">
        <div>
          <img
            className="h-[30px] w-[100px] "
            src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
          />
        </div>
        <button className=" flex bg-green-600 rounded-[10px] h-[30px] w-[70px] ml-auto">
          Buy now
        </button>
      </div>
      {/*Contact section */}
      <div className="flex flex-row justify-between items-center  text-gray-700 text-sm px-10 py-3 border-b border-gray-200 bg-stone-900">
        <div className="flex gap-6">
          <span>Phone: +47 333 78901</span>
          <span>Email: food@restan.com</span>
        </div>
        <div> 175 10th Street, Office 375 Berlin, De 21562</div>
      </div>
      {/*Navbar section */}
        <nav className="flex justify-center items-center  py-5 bg-zinc-700 text-gray-900 font-semibold shadow-md">
          <img
            className="h-[40px]"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
          />
          
          <div className="mr-[30px]">Home</div>
          <div className="mr-[30px]">About</div>
          
        <div className="mr-[30px] ml-[30px]">Menu</div>
        <div className="mr-[30px]">Contact</div>
       
      
       </nav>
      {/*Hero section */}
      <div
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/036/099/980/non_2x/ai-generated-the-luxurious-restaurant-is-neatly-arranged-professionalgraphy-photo.jpg')",
        }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Best Restaurant</h1>
          <div className="border-2 border-white rounded-full w-[150px] h-[150px] mx-auto flex items-center justify-center text-center text-sm tracking-wider">
            <p>
              BEST FOOD SINCE 1865 
            </p>
          </div>
        </div>
        </div>
       
    </div>
  );
}

