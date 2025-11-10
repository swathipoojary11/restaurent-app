export default function Ad(){
    return(
        <div className="flex bg-zinc-800 h-[40px] w-full items-center">
        <div>
          <img
            className="h-[30px] w-[100px] "
            src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
          />
        </div>
        <button className=" flex bg-green-400 rounded-[10px] h-[30px] w-[70px] ml-auto">
          Buy now
        </button>
      </div>
    )
}