import { FaLocationDot, FaPhone, FaSquareYoutube, FaTelegram, FaTiktok } from "react-icons/fa6"
import { MdOutlineFacebook, MdOutlineMailOutline } from "react-icons/md"
import { Link } from "react-router-dom"


function Footers() {
  return (
    <div className='flex flex-col bg-slate-500'>
      <div className="flex flex-row justify-around items-center bg-slate-500 border-lg   ">
        <div className="my-3">
            <p className='text-3xl text-white'>Start learning with 20k students around the world.</p>
        </div>
        <div className="flex flex-row gap-5 text-white h-[150px] my-3 items-center  border-r-gray-50 ">

             <div className=" relative">
               <h1 className='text-4xl'>40+</h1>
               <p className='absolute top-7 ml-3'>Start .</p>
            </div>

             <div className=" relative">
               <h1 className='text-4xl'>40+</h1>
               <p className='absolute top-7 ml-3'>Start .</p>
            </div>
             <div className=" relative">
               <h1 className='text-4xl'>40+</h1>
               <p className='absolute top-7 ml-3'>Start .</p>
            </div>
          
           
        </div>
      </div>
      <div className=" flex flex-row justify-around bg-slate-500 border-lg border-t w-[1100px] mx-auto  border-white">
              <div className="flex flex-col gap-6  lg:w-1/2 my-3">

                <h1 className=' capitalize text-4xl font-semibold sm:text-center lg:text-start text-white'>contact Us</h1>
                  
                <div className="flex flex-row">
                  <FaPhone  className="text-white rounded-xl bg-transparent  font-semibold text-3xl m-2" />
                  <div className="">
                      <span className="ml-5 text-2xl text-slate-300">Phone</span>
                      <p className="text-slate-300 ml-4">+251901375553/+25102276248</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <MdOutlineMailOutline className="text-white rounded-xl mt-3 bg-transparent font-semibold text-4xl " />
                  <div className="space-y-3">
                      <span className="ml-5 text-2xl text-slate-300">Email</span>
                      <p className="text-xl text-slate-300 ml-4">infoSomTechDev@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <FaLocationDot className="text-white rounded-xl mt-4 bg-transparent font-extrabold text-4xl" />
                  <div className="space-y-3">
                      <span className="ml-5 text-2xl text-slate-300">Headquarter Office</span>
                      <p className="text-slate-300 ml-4">jigjiga,somali region, ethiopia</p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                    <MdOutlineFacebook className="text-4xl  text-white rounded-xl" />
                    <FaTiktok className="text-4xl  text-white rounded-xl" />
                    <FaTelegram className="text-4xl  text-white rounded-xl" />
                    <FaSquareYoutube className="text-4xl  text-white rounded-xl" />
                  </div>
            
              </div>
              <div className="my-4 flex flex-col gap-10 mr-20">
                      <h1 className="capitalize text-4xl font-semibold sm:text-center lg:text-start text-white">  categories</h1>
                      <div className="flex flex-col gap-7 capitalize text-2xl text-slate-300">
                          <span>Web App</span>
                          <span>maintaince</span>
                          <span>mobile App</span>
                          <span>ui/ux</span>
                      </div>
              </div>
              <div className="my-4 flex flex-col gap-10">
                      <h1 className="capitalize text-4xl font-semibold sm:text-center lg:text-start text-white">quick link</h1>
                      <div className="flex flex-col gap-7 text-slate-300 capitalize text-2xl">
                          <Link to="/">Home </Link>
                          <Link to="/about">about </Link>
                          <Link to="/service">service</Link>
                          <Link to="/blogs">blogs</Link>
                          <Link to="/contacts">contact</Link>
                      </div>
              </div>
      </div>
      <div className="border-t border-lg border-white capitalize h-[80px] text-center flex items-center justify-center text-white">
        &copy SomTechDev are reserved
      </div>
    </div>
  )
}

export default Footers
