import React from "react"
import { FaLocationDot, FaPhone, FaSquareYoutube, FaTelegram, FaTiktok } from "react-icons/fa6"
import { MdOutlineFacebook, MdOutlineMailOutline } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import whatsapp from "../../assets/image/what.png"

function Footers() {
  const darkMode = useSelector((state) => state.posts.darkMode)

  return (
    <footer className={`${darkMode ? "bg-slate-500 text-gray-100" : "bg-slate-900 text-white"}`}>
      
     
      <div className="max-w-[1100px] mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xl md:text-2xl font-semibold text-center md:text-left">
          Start learning with 20k students around the world.
        </p>

        <div className="flex gap-6 text-center">
          {["40+", "50+", "30+"].map((val, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold">{val}</h2>
              <p className="text-sm text-gray-300">Start</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-400">

       
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact Us</h2>

          <div className="flex items-start gap-4">
            <FaPhone className="text-2xl sm:text-3xl mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+251901375553 / +25102276248</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdOutlineMailOutline className="text-3xl mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p>infoSomTechDev@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLocationDot className="text-3xl mt-1" />
            <div>
              <p className="font-semibold">Headquarter</p>
              <p>Jigjiga, Somali Region, Ethiopia</p>
            </div>
          </div>

         
          <div className="flex gap-4 mt-4 text-xl">
            <MdOutlineFacebook className="hover:text-blue-500 transition" />
            <FaTiktok className="hover:text-pink-500 transition" />
            <FaTelegram className="hover:text-blue-400 transition" />
            <FaSquareYoutube className="hover:text-red-600 transition" />
          </div>
        </div>

        
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Categories</h2>
          <div className="flex flex-col gap-3 text-gray-300 capitalize text-lg">
            <span>Web App</span>
            <span>Maintenance</span>
            <span>Mobile App</span>
            <span>UI/UX</span>
            <span>Branding</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Quick Links</h2>
          <div className="flex flex-col gap-3 text-gray-300 text-lg">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/service" className="hover:text-white transition">Service</Link>
            <Link to="/blogs" className="hover:text-white transition">Blogs</Link>
            <Link to="/contacts" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-400 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} SomTechDev. All rights reserved.
      </div>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/251902276240"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-16 h-16 animate-pulse hover:animate-none"
        />
      </a>
    </footer>
  )
}

export default Footers
