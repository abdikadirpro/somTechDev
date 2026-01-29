import { FaPhone, FaLocationDot, FaTiktok, FaTelegram, FaSquareYoutube } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlineFacebook } from "react-icons/md";
import { useSelector } from "react-redux";

function ContactContent() {
      const darkMode = useSelector((state) => state.posts.darkMode)

  return (
    <div className={`"py-10 px-4 sm:px-6 md:px-12 ${darkMode ? "text-black/60":"text-white/85"}"`}>
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          <h1 className={`"text-3xl sm:text-4xl md:text-5xl font-semibold ${darkMode ? "text-blue-950" : "text-white"}  text-center md:text-left"`}>
            Contact Us
          </h1>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhone className="text-white bg-blue-700 w-12 h-12 p-2 rounded-lg flex-shrink-0" />
            <div>
              <span className={`"text-xl sm:text-2xl font-semibold ${darkMode ? "text-blue-950" : "text-white"}"`}>Phone</span>
              <p className={`hover:underline ${darkMode ? "text-blue-950" : "text-white"}`}>+251901375553 / +25102276248</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <MdOutlineMailOutline className="text-white bg-blue-700 w-12 h-12 p-2 rounded-lg flex-shrink-0" />
            <div>
              <span className={`"text-xl sm:text-2xl font-semibold ${darkMode ? "text-blue-950" : "text-white"}"`}>Email</span>
              <p className={`"${darkMode ? "text-blue-950" : "text-white"}"`}>infoHornTechDev@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <FaLocationDot className="text-white bg-blue-700 w-12 h-12 p-2 rounded-lg flex-shrink-0" />
            <div>
              <span className={`"text-xl sm:text-2xl font-semibold ${darkMode ? "text-blue-950" : "text-white"}"`}>Headquarter Office</span>
              <p className={`"${darkMode ? "text-blue-950" : "text-white"}"`}>Jigjiga, Somali Region, Ethiopia</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className={`"text-2xl sm:text-3xl font-semibold ${darkMode ? "text-blue-950" : "text-white"} mb-2"`}>Social Media</h2>
            <div className="flex gap-4 py-5">
              <MdOutlineFacebook className="text-white hover:scale-125 duration-300 bg-blue-700 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
              <FaTiktok className="text-white hover:scale-125 duration-300 bg-blue-700 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
              <FaTelegram className="text-white hover:scale-125 duration-300 bg-blue-700 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
              <FaSquareYoutube className="text-white hover:scale-125 duration-300 bg-blue-700 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`flex-1 shadow-lg rounded-xl p-6 ${darkMode ? 'bg-blue-100' : 'bg-slate-900/90'}`}>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                name="FirstName"
                id="FirstName"
                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-700 outline-none bg-blue-50 text-blue-950"
              />
              
              <input
                type="text"
                placeholder="Last Name"
                id="LastName"
                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-700 outline-none bg-blue-50 text-blue-950"
              />
            </div>

            <input
                type="email"
                placeholder="Your Email"
                name="YourEmail"
                id="YourEmail"
                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-700 outline-none bg-blue-50 text-blue-950"
              />
            <input
                type="text"
                placeholder="Subject"
                name="Subject"
                id="Subject"
                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-700 outline-none bg-blue-50 text-blue-950"
              />
            <textarea
              placeholder="Message"
              name="Message"
              id="Message"
              className="border border-blue-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-blue-700 outline-none w-full bg-blue-50 text-blue-950 resize-none h-32"
            />

            <button
              type="submit"
              className="bg-blue-700 text-white rounded-lg px-4 py-1 text-2xl font-semibold hover:bg-blue-700/80 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactContent;
