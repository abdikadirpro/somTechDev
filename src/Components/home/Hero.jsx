
const Hero = ()=>{
    return(
     <div className="flex justify-around items-center gap-10 py-2 h-screen max-w-[1100px] mx-auto px-4">

      <div className="flex flex-col items-start text-left max-w-xl">
            <h1 className="font-semibold text-5xl text-left capitalize whitespace-normal break-words">

                Transform ideas Into powerful digital products.

            </h1>
            <p className="text-2xl mt-4 whitespace-normal break-words ">
                we create modern websites,mobile  app
                and management system for businesses,
                schools,hospitals,HR-M's and startups
              </p>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">Hire Us now!</button>
        </div>
        <img     className="w-[420px] h-[320px] object-cover rounded-xl shadow-lg"
        src="https://media.istockphoto.com/id/2220470068/photo/successful-professional-typing-on-laptop-working-intently-at-sleek-workspace-with-focused.webp?a=1&b=1&s=612x612&w=0&k=20&c=1nntQfSRPum3qhApfrL3AbF18VqCxp1DfH3dan_fAaI=" alt="" />
      </div>  
    )
}

export default Hero;