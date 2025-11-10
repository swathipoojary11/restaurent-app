import Hero from "./components/hero";
import Ad from "./components/ad";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
export default function Home() {
  return (
  
    <div className="h-full md:min-h-screen w-fit md:w-full bg-gray-100">
      {/*<Ad/> ad.jsx */}
      <Contact />
      {/* contact.jsx */}
      <Navbar />
      {/*Navbar.jsx */}
      <Hero />
      {/*Hero.jsx */}
      {/*booking */}
      <div className="flex flex-col md:flex-row ">
        <div className=" ml-[30px]  md:ml-[100px] mr-[30px] md:mr-[1px] translate-y-1/4 md:-translate-y-1/4 bg-white text-black w-full md:w-[400px] rounded-3xl shadow-2xl px-8 py-10">
          <div className="absolute -top-20 md:-top-8 left-1/2 -translate-x-1/2 bg-yellow-800 h-[150px] md:h-[70px] w-[150px] md:w-[70px] rounded-full flex items-center justify-center">
            <span className="text-3xl md:text-2xl text-white">Spoon</span>
          </div>

          <h2 className="text-5xl md:text-3xl font-semibold  mt-[100px] mb-8 text-center md:mt-4">
            Book a table
          </h2>

          <form className="   flex flex-col space-y-4">
            <input
              type="tel"
              placeholder="Phone"
              className=" text-4xl md:text-sm w-full h-[150px] md:h-[40px]  px-3 py-2 border-2 border-gray-400 md:border-gray-300 rounded-lg "
            />
            <select className="text-4xl md:text-sm  h-[150px] md:h-[40px] w-full border-2 border-gray-400 md:border-gray-300 rounded-lg px-3 py-2 ">
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
            </select>
            <input
              type="date"
              placeholder="Date"
              className= " text-4xl md:text-sm h-[150px] md:h-[40px]  w-full px-3 py-2 border-2 border-gray-400  md:border-gray-300 rounded-lg "
            />
            <select className=" text-4xl md:text-sm   h-[150px] md:h-[40px] w-full border-2 border-gray-400 md:border-gray-300 rounded-lg px-3 py-2 ">
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>7:00 PM</option>
            </select>
            <button
              type="submit"
              className=" text-4xl md:text-2xl h-[100px] md:h-[40px]  w-[300px] md:w-full bg-yellow-800 text-white rounded-lg  py-2 font-semibold hover:bg-black "
            >
              Book Now
            </button>
          </form>
        </div>
        {/*right div */}
        <div className=" mt-[500px] ml-[50px] flex flex-col h-[500px] w-[70%]">
          <div className="mt-[40px] ml-[50px] text-black text-3xl font-semibold w-full">
            Our Popular category
          </div>

          {/* The row of cards */}
          <div className="flex  flex-col md:flex-row mt-[30px] ml-[50px] gap-6">
            {/* Card 1 */}
            <div className="flex flex-col text-white text-2xl h-[300px] w-1/4">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75"
                className="rounded-2xl h-[250px] w-full object-cover"
              />
              <div className="font-bold text-2xl text-amber-400 -mt-[70px] ml-[10px]">
                Dessert
              </div>
              <div className="ml-[10px] text-white font-semibold">Cake</div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col text-white text-2xl h-[300px] w-1/4">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F20.jpg&w=1920&q=75"
                className="rounded-2xl h-[250px] w-full object-cover"
              />
              <div className="font-bold text-2xl text-amber-400 -mt-[70px] ml-[10px]">
                Drinks
              </div>
              <div className="ml-[10px] text-white font-semibold">
                Mocktails
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col text-white text-2xl h-[300px] w-1/4">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F10.jpg&w=1920&q=75"
                className="rounded-2xl h-[250px] w-full object-cover"
              />
              <div className="font-bold text-2xl text-amber-400 -mt-[70px] ml-[10px]">
                Fast Food
              </div>
              <div className="ml-[10px] text-white font-semibold">Burgers</div>
            </div>
          </div>
        </div>
      </div>
      {/*Quality card  */}
      <div className=" flex flex-row h-[400] w-full justify-center ">
        <div className="  border-t-2 border-r-2  border-black rounded-t-3xl flex flex-col h-[350px] w-[400px]  border-black">
          <div>
            <img
              className="h-[70px] w-[70px]"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
            />
          </div>
          <div className="font-bold text-2xl text-black mt-2 ml-2">
            Quality Food
          </div>
          <div className="ml-2 text-black ">
            Belonging sir curiosity discovery extremity yet
            <br />
            forfeited prevailed own off. Traveling by
            <br />
            introduced of mr terminated.
          </div>
        </div>
        <div className="   border-b-2 border-r-2 border-black rounded-b-3xl flex flex-col h-[350px] w-[400px]  border-black">
          <div>
            <img
              className="h-[70px] w-[70px]"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
            />
          </div>
          <div className="font-bold text-2xl text-black mt-2 ml-2">
            Quality Food
          </div>
          <div className="ml-2 text-black ">
            Belonging sir curiosity discovery extremity yet
            <br />
            forfeited prevailed own off. Traveling by
            <br />
            introduced of mr terminated.
          </div>
        </div>
        <div className="  border-t-2 border-black rounded-t-3xl flex flex-col h-[350px] w-[400px]  border-black">
          <div>
            <img
              className="h-[70px] w-[70px]"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
            />
          </div>
          <div className="font-bold text-2xl text-black mt-2 ml-2">
            Quality Food
          </div>
          <div className="ml-2 text-black ">
            Belonging sir curiosity discovery extremity yet
            <br />
            forfeited prevailed own off. Traveling by
            <br />
            introduced of mr terminated.
          </div>
        </div>
      </div>
      {/*menu page */}
      <div className=" items-center w-full h-auto flex flex-col">
        <div className=" font-bold text-lg text-yellow-800 mt-[40px]">
          FOOD MENU
        </div>
        <div className="text-4xl text-black mt-[30px]">Our Specials Menu</div>
        <div className=" border-2 border-gray-400 rounded-sm h-[70px] w-[600px] flex flex-row mt-[10px] justify-center items-center">
          <div className=" ml-[30px] hover:text-white hover:rounded-sm hover:h-[40px] hover:bg-amber-900">
            MAIN DISHES
          </div>
          <div className=" ml-[30px] hover:text-white hover:rounded-sm  hover:h-[40px] hover:bg-amber-900">
            MAIN DESSERT{" "}
          </div>
          <div className=" ml-[30px] hover:text-white hover:rounded-sm  hover:h-[40px] hover:bg-amber-900">
            SEA FOOD{" "}
          </div>
          <div className=" ml-[30px] hover:text-white hover:rounded-sm  hover:h-[40px] hover:bg-amber-900">
            BEVEAGE
          </div>
        </div>
      </div>
      <div className="  mt-[50px] flex flex-row h-[500px] w-full  justify-center">
        <div className="  border-gray-300 border-1 mt-[50px] rounded-2xl flex flex-col h-[450px] w-1/4 bg-white">
          {/*image section */}

          <img
            className="rounded-2xl h-[50%] w-full"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75"
          />
          {/*price tag */}
          <div className=" items-center flex flex-row bg-white h-[15%] w-[60%] rounded-r-2xl -mt-[40px]">
            <div className=" ml-[30px] text-gray-500 font-bold">4.9(5.7K)</div>
            <div className="ml-[30px]   text-2xl text-yellow-700 font-bold">
              <span className=" text-gray-700 font-bold text-sm">$35</span>
              $34
            </div>
          </div>
          <div className="  hover:text-yellow-700 mt-[30px] ml-[30px] text-3xl font-semibold text-gray-900 ">
            Braised Chicken Legs
          </div>
          <div className=" mt-[40px] flex flex-row">
            <div className=" ml-[30px] text text-gray-600 ">4 chicken*</div>
            <div className=" ml-[10px] text-gray-600 ">legsChili*</div>
            <div className=" ml-[10px] text-gray-600 ">sauceSoft Drinks</div>
          </div>
          {/*Add to cart button */}
          <button className="hover:text-white hover:bg-yellow-800 mb-[10] ml-[20px] h-[40px] w-[300px] mt-[30px] border-2 border-amber-950 rounded-3xl">
            Add to cart
          </button>
        </div>

        {/*2nd card */}
        <div className=" ml-[20px] border-gray-300 border-1 mt-[50px] rounded-2xl flex flex-col h-[450px] w-1/4 bg-white">
          {/*image section */}

          <img
            className="rounded-2xl h-[50%] w-full"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75"
          />
          {/*price tag */}
          <div className=" items-center flex flex-row bg-white h-[15%] w-[60%] rounded-r-2xl -mt-[40px]">
            <div className=" ml-[30px] text-gray-500 font-bold">4.9(5.7K)</div>
            <div className="ml-[30px]   text-2xl text-yellow-700 font-bold">
              <span className=" text-gray-700 font-bold text-sm">$35</span>
              $34
            </div>
          </div>
          <div className="  hover:text-yellow-700 mt-[30px] ml-[30px] text-3xl font-semibold text-gray-900 ">
            Braised Chicken Legs
          </div>
          <div className=" mt-[40px] flex flex-row">
            <div className=" ml-[30px] text text-gray-600 ">4 chicken*</div>
            <div className=" ml-[10px] text-gray-600 ">legsChili*</div>
            <div className=" ml-[10px] text-gray-600 ">sauceSoft Drinks</div>
          </div>
          {/*Add to cart button */}
          <button className="hover:text-white hover:bg-yellow-800 mb-[10] ml-[20px] h-[40px] w-[300px] mt-[30px] border-2 border-amber-950 rounded-3xl">
            Add to cart
          </button>
        </div>
        {/*3rd card */}
        <div className=" ml-[20px] border-gray-300 border-1 mt-[50px] rounded-2xl flex flex-col h-[450px] w-1/4 bg-white">
          {/*image section */}

          <img
            className="rounded-2xl h-[50%] w-full"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75"
          />
          {/*price tag */}
          <div className=" items-center flex flex-row bg-white h-[15%] w-[60%] rounded-r-2xl -mt-[40px]">
            <div className=" ml-[30px] text-gray-500 font-bold">4.9(5.7K)</div>
            <div className="ml-[30px]   text-2xl text-yellow-700 font-bold">
              <span className=" text-gray-700 font-bold text-sm">$35</span>
              $34
            </div>
          </div>
          <div className="  hover:text-yellow-700 mt-[30px] ml-[30px] text-3xl font-semibold text-gray-900 ">
            Braised Chicken Legs
          </div>
          <div className=" mt-[40px] flex flex-row">
            <div className=" ml-[30px] text text-gray-600 ">4 chicken*</div>
            <div className=" ml-[10px] text-gray-600 ">legsChili*</div>
            <div className=" ml-[10px] text-gray-600 ">sauceSoft Drinks</div>
          </div>
          {/*Add to cart button */}
          <button className="hover:text-white hover:bg-yellow-800 mb-[10] ml-[20px] h-[40px] w-[300px] mt-[30px] border-2 border-amber-950 rounded-3xl">
            Add to cart
          </button>
        </div>
      </div>
      {/*menu section 2 */}
      <div className=" m-auto mt-[100px] text-white rounded-4xl h-[600px] w-[1000px] bg-black flex flex-row items-center">
        <div className="h-auto w-[50%]">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" />
        </div>
        {/*Text section */}
        <div className=" ml-[50px] flex flex-col text-white w-[70%]">
          <div className="text-5xl font-semibold">
            Are you Ready to Start
            <br /> your online Order?
          </div>
          <div className="text-gray-300 text-sm mt-[30px]">
            Bndulgence diminution so discovered mr apartments. Are off under
            folly death
            <br />
            wrote cause her way spite. Plan upon yet way get cold spot its week.
            Almost do am
            <br />
            or limits hearts. Resolve parties but why she shewing. She sang know
            now
          </div>
          <div className=" mt-[50px] flex flex-row items-center j">
            <button className=" rounded-3xl justify-center p-[10px] flex h-[50px] hover:border-2 hover:border-white hover:text-white hover:bg-black w-[150px] bg-yellow-50 text-black">
              App store
            </button>
            <button className=" rounded-3xl justify-center p-[10px] flex h-[50px] ml-[50px] hover:text-black hover:bg-white w-[150px] bg-yellow-600 text-black">
              Play store
            </button>
          </div>
        </div>
      </div>

      {/*About us page */}
      <div className=" mt-[1000px] bg-[url('https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg')] flex flex-col h-[300px] w-full justify-center items-center text-center text-5xl font-bold text-white bg-cover bg-center">
        About Us
      </div>
      <div className=" flex flex-col items-center bg-yellow-50 h-[300px] w-full">
        <div className=" text-bold text-sm text-yellow-800 mt-[50px]">
          -----------------------OUR TRUSTED 8K HAPPY
          PARTNERS--------------------------
        </div>
        <div className="flex flex row  justify-center">
          <img
            className=" h-[100px] w-[150px] mt-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=640&q=75"
          />
          <img
            className=" h-[100px] w-[150px]  ml-[50px] mt-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=640&q=75"
          />
          <img
            className=" h-[100px] w-[150px]  ml-[50px] mt-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=640&q=75"
          />
          <img
            className=" h-[100px] w-[150px]   ml-[50px] mt-[40px] "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=640&q=75"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="  items-center flex flex-row h-[600px] w-full ">
          {/*use compoment  */}
          <img
            className="h-[300px] ml-[10px] w-[350px] "
            src="https://media.istockphoto.com/id/992851056/photo/now-we-eat.jpg?s=612x612&w=0&k=20&c=PLQfNeiNuf24FJIVHeFyGwV7I9A4BZbfSPTZKdje66E="
          />
          <img
            className="h-[300px] ml-[30px] w-[350px] "
            src="https://static.vecteezy.com/system/resources/previews/035/500/785/non_2x/ai-generated-of-beautiful-woman-as-a-waitress-serving-food-in-retro-dining-restaurant-generative-ai-photo.jpg"
          />

          <div className="  border-1 border-gray-100 -mb-[200px] -ml-[50px] px-5 flex flex-col bg-white h-[400px] w-[600px] bg-amber-100 shadow-2xl shadow-gray-300 ">
            <div className=" font-bold text-sm text-yellow-800 mt-[50px]">
              ABOUT US
            </div>
            <div className="font-bold text-5xl mt-[40px]">
              We Invite You
              <br />
              To Visit Our Restaurant
            </div>
            <div className="text-[11px] mt-[20px]">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time <br />
              Bar opens in the center of Florence. The only bar inspired by the
              1960s, it will give you
              <br /> a experience that you’ll have a hard time forgetting.
            </div>
            <button className="py-0.5 hover:text-white hover:bg-black rounded-2xl  bg-yellow-700 h-[40px] w-[150px] mt-[30px] shadow-xs shadow-amber-500">
              Discover more
            </button>
          </div>
        </div>
      </div>
      {/*vidio component for about us */}
      <div className="flex flex-row h-auto w-[90%] mt-[150px] m-auto">
        <div className="h-[450px] w-[50%] bg-black">dfef</div>
        <div className="-ml-[50px] -mt-[60px] h-[400px] w-[50%]  flex flex-col  items-center">
          <div className="mt-[20px]   h-[400px] bg-white w-full shadow-2xl border-1 border-gray-100">
            <div className=" ml-[50px] mt-[20px] text-4xl font-semibold">
              Opening Hours{" "}
            </div>
            <div className=" text-gray-600 ml-[50px] mt-[20px] text-sm">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The <br />
              Patio Time Bar opens in the center..{" "}
            </div>
            <div className="flex flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Sunday to
                Tuesday:____________________________________________________________________
              </div>
              <div className="ml-auto mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Wednesday to
                Thursday:____________________________________________________________
              </div>
              <div className="ml-auto mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Friday &
                Saturday:____________________________________________________________________
              </div>
              <div className="ml-auto mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[60px] w-[60px]   mt-[10px] ml-[30px] rounded-full bg-yellow-700"></div>
              <div className="mt-[20px] ml-[50px] text-sm ">
                Call Anytime
                <br />
                <span className=" text-lg font-semibold"> +964733-378901</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-auto w-full bg-yellow-50">
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
      {/*Contact us page  */}
      {/*use component here */}
      <div className=" mt-[10px] bg-[url('https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg')] flex flex-col h-[300px] w-full justify-center items-center text-center text-5xl font-bold text-white bg-cover bg-center">
        Contact Us
      </div>
      {/*location bar */}
      <div className="flex flex-row h-[250px] w-[900px] m-auto  items-center">
        <div className=" ml-[30px] flex flex-col border-1 bg-gray-200 border-gray-400 h-[200px] w-[250px] items-center rounded-2xl ">
          <div className="mt-[10px]  rounded-full bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=256&q=75')]  bg-cover bg-center h-[60px] w-[60px]"></div>
          <div className=" mt-[10px] text-2xl font-bold">Hotline</div>
          <div className="mt-[10px] text-sm">+4733378901</div>
        </div>
        <div className=" ml-[30px] flex flex-col border-1 bg-gray-200 border-gray-400 h-[200px] w-[250px] items-center rounded-2xl ">
          <div className="mt-[10px]  rounded-full bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=256&q=75')]  bg-cover bg-center h-[60px] w-[60px]"></div>
          <div className=" mt-[10px] text-2xl font-bold">Our Location</div>
          <div className="mt-[10px] text-sm text-gray-600">
            55 Main Street, The Grand Avenue 2nd <br />
            Block, New York City
          </div>
        </div>
        <div className=" ml-[30px] flex flex-col border-1 bg-gray-200 border-gray-400 h-[200px] w-[250px] items-center rounded-2xl">
          <div className="mt-[10px]  rounded-full bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=256&q=75')]  bg-cover bg-center h-[60px] w-[60px]"></div>
          <div className=" mt-[10px] text-2xl font-bold">Official Email</div>
          <div className="mt-[10px] font-semibold   text-sm">
            info@restan.com
          </div>
        </div>
      </div>
      {/*keep in touch part */}
      <div className="flex flex-col bg-white m-auto h-[500px] w-[700px] items-center shadow-2xl shadow-gray-600 rounded-2xl">
        <div className=" font-bold text-sm text-yellow-800 mt-[50px]">
          KEEP IN TOUCH
        </div>
        <div className=" font-semibold text-5xl mt-[10px]">
          Send us a Massage
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="border-1 bg-gray-100 border-gray-200 rounded-sm p-2 mt-2 w-[600px]"
          />
        </div>
        <div className=" flex flex-row">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-100 border-1 border-gray-200 rounded-sm p-2 mt-2 w-[290px]"
          />

          <input
            type="text"
            placeholder="Phone"
            className=" bg-gray-100 ml-[15px] border-1 border-gray-200 rounded-sm p-2 mt-2 w-[290px]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Message"
            className=" bg-gray-100 border-1 border-gray-200 rounded-sm p-2 mt-2 h-[200px] w-[600px]"
          />
        </div>
        <button className=" hover:text-white hover:bg-black rounded-2xl bg-yellow-700 h-[40px] w-[150px] mt-8 shadow-xs shadow-amber-500">
          Get in Touch
        </button>
      </div>
      {/*vidio component for about us */}
      <div className="flex flex-row h-auto w-[90%] mt-[150px] m-auto">
        <div className="h-[450px] w-[50%] bg-black">dfef</div>
        <div className="-ml-[50px] -mt-[60px] h-[400px] w-[50%]  flex flex-col  items-center">
          <div className="mt-[20px]   h-[400px] bg-white w-full shadow-2xl border-1 border-gray-100">
            <div className=" ml-[50px] mt-[20px] text-4xl font-semibold">
              Opening Hours{" "}
            </div>
            <div className=" text-gray-600 ml-[50px] mt-[20px] text-sm">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The <br />
              Patio Time Bar opens in the center..{" "}
            </div>
            <div className="flex flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Sunday to
                Tuesday:____________________________________________________________________
              </div>
              <div className="ml-auto mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Wednesday to
                Thursday:____________________________________________________________
              </div>
              <div className="ml-auto mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-[20px] ml-[50px] text-sm font-semibold">
                Friday &
                Saturday:____________________________________________________________________
              </div>
              <div className="ml-auto mr-[30px] text-sm font-semibold">
                10:00 - 09:00
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[60px] w-[60px]   mt-[10px] ml-[30px] rounded-full bg-yellow-700"></div>
              <div className="mt-[20px] ml-[50px] text-sm ">
                Call Anytime
                <br />
                <span className=" text-lg font-semibold"> +964733-378901</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*menu category */}
      <div className=" mt-[100px] bg-[url('https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg')] flex flex-col h-[300px] w-full justify-center items-center text-center text-5xl font-bold text-white bg-cover bg-center">
        Restaurant Food Menu
      </div>

      {/*menu category component */}
      <div className="flex flex-col m-auto h-auto w-full items-center">
        <div className=" font-bold text-md text-yellow-800 mt-[50px]">
          CATEGORY
        </div>
        <div className=" font-semibold text-6xl mt-[20px]">
          Choose Your Best Food
        </div>
        <div className=" flex flex-row h-auto w-[90%] ">
          {/* 2 image  */}
          <div className=" m rounded-2xl flex flex-col  bg-white border-1 border-gray-200  h-[450px] w-1/4">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row h-[70px] w-full  ">
              <div className="flex w-1/2 h-full items-center rounded-r-4xl bg-gray-400">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center ml-[60px] text-3xl font-bold text-black">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700  mt-[20px] font-semibold text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[20px] ml-[40px] text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[20px] -ml-[40px] font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
          {/*2nd block */}
          <div className="   ml-[30px] rounded-2xl flex flex-col  bg-white border-1 border-gray-200  h-[450px] w-1/4">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row h-[70px] w-full  ">
              <div className="flex w-1/2 h-full items-center rounded-r-4xl bg-gray-400">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center ml-[60px] text-3xl font-bold text-black">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700  mt-[20px] font-semibold text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[20px] ml-[40px] text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[20px] -ml-[40px] font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
          {/*3nd block */}
          <div className="   ml-[30px] rounded-2xl flex flex-col  bg-white border-1 border-gray-200  h-[450px] w-1/4">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row h-[70px] w-full  ">
              <div className="flex w-1/2 h-full items-center rounded-r-4xl bg-gray-400">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center ml-[60px] text-3xl font-bold text-black">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700  mt-[20px] font-semibold text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[20px] ml-[40px] text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[20px] -ml-[40px] font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
          {/*4nd block */}
          <div className="   ml-[30px] rounded-2xl flex flex-col  bg-white border-1 border-gray-200  h-[450px] w-1/4">
            <img
              className="rounded-t-2xl"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/AI-Generated-Food-Dessert-Images-Graphics-72496513-1.jpg"
            />
            <div className="flex flex-row h-[70px] w-full  ">
              <div className="flex w-1/2 h-full items-center rounded-r-4xl bg-gray-400">
                <div className=" ml-[60px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>

                <div className=" border-2 border-white bg-cover -ml-[20px] bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
                <div className=" -ml-[20px] border-2 border-white bg-cover bg-center bg-[url('https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75')] h-[35px] w-[35px] rounded-full bg-amber-500"></div>
              </div>
              <div className="flex   items-center ml-[60px] text-3xl font-bold text-black">
                5.0
              </div>
            </div>
            <div className=" hover:text-yellow-700  mt-[20px] font-semibold text-2xl ml-[40px]">
              Pizza Slice
            </div>
            <div className="mt-[20px] ml-[40px] text-gray-500">
              Cheese, Ham & Pineapple
            </div>
            <button className="mt-[20px] -ml-[40px] font-bold text-yellow-700">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-[60px] flex flex-row h-[500px] w-full bg-red-950 items-center ">
        <div className="flex flex-col ">
          <div className=" mt-[50px] ml-[50px] text-6xl w-[60%] text-white">
            30 Minutes
            <br /> Delivery!
          </div>
          <div className="text-amber-50 mt-[30px] ml-[50px]">
            A relaxing and pleasant atmosphere, good jazz, dinner, and
            cocktails. The <br />
            Patio Time Bar opens in the center of Florence. The only bar
            inspired by the
            <br />
            1960s, it will give you a experience that you’ll have a hard time
            forgetting.
          </div>
          <button className=" mt-[30px] ml-[50px] bg-yellow-700 text-white hover:text-black hover:bg-white h-[50px] w-[150px]">
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
      <div className="h-[600px] flex flex-col  items-center w-full bg-amber-50">
        <div className=" font-bold text-md  text-yellow-800 mt-[50px]">
          HAPPY CUSTOMERS
        </div>
        <div className=" font-semibold text-5xl mt-[20px]">
          Our Customers Feedback
        </div>
        <div className="  mt-[30px] flex flex-row">
          <div className="h-[400px]  w-[400px]">
            <img
              className="  rounded-2xl"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"
            />
          </div>
          {/*text section */}
          <div className=" ml-[100px] flex flex-col">
            <div className="text-gray-500">(5/5)</div>
            <div className="text-3xl font-semibold mt-[30px]">
              The best food ever
            </div>
            <div className="text-gray-600 mt-[30px] ">
              Targeting consultation discover apartments.ndulgence off
              <br />
              under folly death wrote cause her way spite.Plan upon yet
              <br />
              way get cold spot its week.almost do am or limits hearts
              <br />
              Resolve parties but why she shewing.
            </div>
            <hr />
            <div className="mt-[30px] text-black text-2xl">
              Matthew J. Wyman
              <br />
              <span className="mt-[30px] font-bold text-sm  text-yellow-800 mt-[50px]>SENIOR CONSULTANT">
                SENIOR CONSULTANT
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-[500px] bg-amber-500 w-full">
        <div>
          <div className="text-2xl font-semibold">RESERVATION </div>
          <div className=" text-4xl font-semibold">
            Reservation Your Favorite <br />
            Private Table
          </div>
          <div className="text-sm font-semibold">
            A relaxing and pleasant atmosphere, good jazz, dinner, and
            cocktails. The Patio Time Bar
            <br />
            opens in the center of Florence. The only bar inspired by the 1960s,
            it will give you a <br />
            experience that you’ll have a hard time forgetting.
          </div>
          <div className="flex flex-row">
            <div>Launch Menu|</div>
            <div>Dinner Menu</div>{" "}
          </div>
        </div>
        <div className="  ml-[100px] -translate-y-1/4 bg-white text-black w-[400px] rounded-3xl shadow-2xl px-8 py-10">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-800 h-[70px] w-[70px] rounded-full flex items-center justify-center">
            <span className="text-2xl text-white">Spoon</span>
          </div>

          <h2 className="text-3xl font-semibold mb-8 text-center mt-4">
            Book a table
          </h2>

          <form className="flex flex-col space-y-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg "
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
              className="w-full bg-yellow-800 text-white rounded-lg py-2 font-semibold hover:bg-black "
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      {/*footer */}
      <div className=" mt-[100px] ml-[150px] flex flex-row bg-black h-[250px] w-[1200px] justify-center ">
        <div className=" ml-[30px] flex flex-col justify-center h-[250px] w-[250px] ">
          <div className=" w-[200px] text-2xl font-semibold text-white">
            About us
          </div>
          <div className=" mt-[10px] text-[13px] text-white ">
            Continued at zealously
            <br /> necessary is Surrounded sir
            <br /> motionless she end literature.
            <br /> Gay direction neglected.
          </div>
          <div className="mt-[20px] flex flex-row  justify-center ">
            <div className="flex border-2  border-white rounded-2xl h-[40px] w-[40px]  text-white bg-black">
              F
            </div>
            <div className="flex border-2  border-white rounded-2xl h-[40px] w-[40px]  ml-[10px] text-white bg-black">
              T
            </div>
            <div className="flex border-2 border-white rounded-2xl h-[40px] w-[40px]  ml-[10px] text-white bg-black">
              Y
            </div>
            <div className="flex border-2 border-white rounded-2xl h-[40px] w-[40px]  ml-[10px] text-white bg-black">
              L
            </div>
          </div>
        </div>
        <div className=" ml-[30px] flex flex-col justify-center h-[250px] w-[250px]\">
          <div className=" w-[200px] text-2xl font-semibold text-white">
            Explore
            <div className=" mt-[10px] text-[13px] text-white ">
              Company Profile
            </div>
            <div className=" mt-[10px] text-[13px] text-white ">About</div>
            <div className=" mt-[10px] text-[13px] text-white ">
              Help center
            </div>
            <div className=" mt-[10px] text-[13px] text-white ">Career</div>
            <div className=" mt-[10px] text-[13px] text-white ">Features</div>
            <div className=" mt-[10px] text-[13px] text-white ">Contact</div>
          </div>
        </div>
        <div className=" ml-[30px] flex flex-col justify-center h-[250px] w-[250px]">
          <div className=" w-[200px] text-2xl font-semibold text-white">
            Contact Info
            <div className=" mt-[10px] text-[13px] text-white ">
              175 10h Street, Office 375
              <br /> Berlin, De 21562
            </div>
            <div className=" mt-[10px] text-[13px] text-white ">
              +123 34598768
              <br />
              +554 34598734
            </div>
            <div className=" mt-[10px] text-[13px] text-white ">
              food@restan.com
            </div>
          </div>
        </div>
        <div className=" ml-[30px] flex flex-col justify-center h-[250px] w-[250px] ">
          <div className=" w-[200px] text-2xl font-semibold text-white">
            Newsletter
            <div className=" mt-[10px] text-[13px] text-white ">
              Join our subscribers list to get the <br />
              latest news and special offers.
            </div>
            <div className=" mt-[10px] text-[13px] text-white ">
              <input
                type="email"
                placeholder="Email"
                className="border-2  rounded-sm p-2 mt-2 w-[290px]"
              />
            </div>
            <hr />
            <div className=" mt-[10px] text-[13px] text-white">
              food@restan.com
            </div>
          </div>
        </div>
      </div>
      <div className="  flex bg-zinc-800 h-[100px] w-full items-center">
        <div>
          <img
            className=" ml-[100px] h-[40px]"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
          />
        </div>
        <div className=" text-white flex rounded-[10px] h-[30px] w-full ml-[800px]">
          © Copyright 2025. Restan. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
