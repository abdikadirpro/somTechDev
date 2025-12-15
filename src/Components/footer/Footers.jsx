import { FaLocationDot, FaPhone, FaSquareYoutube, FaTelegram, FaTiktok } from "react-icons/fa6"
import { MdOutlineFacebook, MdOutlineMailOutline } from "react-icons/md"


function Footers() {
  return (
    <div className='flex flex-col'>
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
      <div className=" bg-slate-500 border-lg border-t border-white">
         <div className="flex flex-col gap-6 w-full lg:w-1/2">

           <h1 className=' capitalize text-4xl font-semibold sm:text-center lg:text-start text-gray-500'>contact Us</h1>
            
          <div className="flex flex-row">
             <FaPhone  className="text-white rounded-xl bg-transparent w-[50px] h-[50px] font-semibold text-2xl m-2" />
            <div className="space-y-3">
                <span className="ml-5 text-3xl">Phone</span>
                <p>+251901375553/+25102276248</p>
            </div>
          </div>
          <div className="flex flex-row">
             <MdOutlineMailOutline className="text-white rounded-xl bg-transparent font-semibold text-5xl " />
            <div className="space-y-3">
                <span className="ml-5 text-3xl">Email</span>
                <p className="text-xl">infoSomTechDev@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row">
             <FaLocationDot className="text-white rounded-xl bg-transparent font-extrabold text-5xl" />
            <div className="space-y-3">
                <span className="ml-5 text-3xl">Headquarter Office</span>
                <p>jigjiga,somali region, ethiopia</p>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Footers
