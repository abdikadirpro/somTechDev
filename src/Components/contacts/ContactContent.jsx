import { FaPhone, FaLocationDot, FaTiktok, FaTelegram, FaSquareYoutube } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlineFacebook } from "react-icons/md";

function ContactContent() {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 text-center md:text-left">
            Contact Us
          </h1>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhone className="text-white bg-blue-500 w-12 h-12 p-2 rounded-lg flex-shrink-0" />
            <div>
              <span className="text-xl sm:text-2xl font-semibold text-gray-700">Phone</span>
              <p className="text-gray-600">+251901375553 / +25102276248</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <MdOutlineMailOutline className="text-white bg-blue-500 w-12 h-12 p-2 rounded-lg flex-shrink-0" />
            <div>
              <span className="text-xl sm:text-2xl font-semibold text-gray-700">Email</span>
              <p className="text-gray-600">infoSomTechDev@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <FaLocationDot className="text-white bg-blue-500 w-12 h-12 p-2 rounded-lg flex-shrink-0" />
            <div>
              <span className="text-xl sm:text-2xl font-semibold text-gray-700">Headquarter Office</span>
              <p className="text-gray-600">Jigjiga, Somali Region, Ethiopia</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">Social Media</h2>
            <div className="flex gap-4">
              <MdOutlineFacebook className="text-white bg-blue-500 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
              <FaTiktok className="text-white bg-blue-500 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
              <FaTelegram className="text-white bg-blue-500 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
              <FaSquareYoutube className="text-white bg-blue-500 w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-600" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-6">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none w-full"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none w-full resize-none h-32"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-3 text-lg font-semibold hover:bg-blue-600 transition"
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
