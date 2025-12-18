import { FaPhone ,FaLocationDot,FaTiktok,FaTelegram,FaSquareYoutube} from "react-icons/fa6";
import { MdOutlineMailOutline,MdOutlineFacebook } from "react-icons/md";

function ContactContent() {
  return (
    <div>
     <div className=" flex flex-col md:flex-row gap-4 justify-around w-full max-w-[1100px] mx-auto p-4
">

        
        <div className="flex flex-col gap-6 w-full lg:w-1/2">

           <h1 className=' capitalize text-4xl font-semibold sm:text-center lg:text-start text-gray-500'>contact Us</h1>
            
          <div className="flex flex-row">
             <FaPhone className="text-white rounded-xl bg-slate-500 w-[50px] h-[50px] font-semibold text-2xl m-2" />
            <div className="space-y-3">
                <span className="ml-5 text-3xl text-slate-500">Phone</span>
                <p className="text-slate-500">+251901375553/+25102276248</p>
            </div>
          </div>
          <div className="flex flex-row">
             <MdOutlineMailOutline className="text-white rounded-xl bg-slate-500 font-semibold text-5xl " />
            <div className="space-y-3">
                <span className="ml-5 text-3xl  text-slate-500">Email</span>
                <p className="text-xl text-slate-500">infoSomTechDev@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row">
             <FaLocationDot className="text-white rounded-xl bg-slate-500 font-extrabold text-5xl" />
            <div className="space-y-3">
                <span className="ml-5 text-3xl text-slate-500">Headquarter Office</span>
                <p className="text-slate-500">jigjiga,somali region, ethiopia</p>
            </div>
          </div>
         <div className="flex flex-col gap-3">
           <h1 className="capitalize text-2xl md:text-3xl text-slate-500">social media</h1>
            <div className="flex flex-row justify-start items-center gap-4">
               <MdOutlineFacebook className="text-4xl bg-slate-500 cursor-pointer text-white rounded-xl" />
               <FaTiktok className="text-4xl bg-slate-500 text-white cursor-pointer rounded-xl" />
               <FaTelegram className="text-4xl bg-slate-500 text-white cursor-pointer rounded-xl" />
               <FaSquareYoutube className="text-4xl bg-slate-500 text-white cursor-pointer rounded-xl" />
            </div>
          </div>
        </div>
        
       <div className="shadow-lg p-6 bg-white rounded-md w-full lg:w-1/2 sm:1/4">

          <div className=" flex flex-col m-2  ">
            <label >Name</label>
           <div className="flex flex-col md:flex-row w-full gap-3">
  <div className="w-full">
    <input
      type="text"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
    />
    <p className="text-sm text-gray-500">First</p>
  </div>

  <div className="w-full">
    <input
      type="text"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
    />
    <p className="text-sm text-gray-500">Last</p>
  </div>
</div>




            <div className="mt-3">
                <label htmlFor="">Email</label>
                  <input type="email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 w-full outline-none" /> 
            </div>
            <div className="mt-3">
                <label htmlFor="">Subject</label>
                  <input type="email"
            className="border border-gray-300 rounded-lg     focus:ring-blue-500 px-4 py-2 w-full outline-none" /> 
            </div>
            <div className="mt-3">
                <label htmlFor="">Message</label>
                  <textarea type="email"
            className="border border-gray-300 rounded-lg px-4 focus:ring-2 focus:ring-blue-500 py-2 w-full outline-none" /> 
            </div>
            <div className="mt-3">
               <button
               className="border bg-blue-400  rounded-lg px-4 py-2 w-full text-white capitalize text-2xl outline-none"
               >submit</button>
            </div>

          </div>
         
        </div>
      </div>
    </div>
  )
}

export default ContactContent
