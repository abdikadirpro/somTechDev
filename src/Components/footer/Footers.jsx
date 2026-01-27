import React, { useEffect, useRef, useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { FaLocationDot, FaPhone, FaSquareYoutube, FaTelegram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineFacebook, MdOutlineMailOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import whatsapp from "../../assets/image/what.png";
// import ChatWidget from "./ChatWidget"; // Make sure this exists

function Footers() {
  const darkMode = useSelector((state) => state.posts.darkMode);

  // --- Stats section logic ---
  const stats = [
    { label: "Projects Delivered", value: 120 },
    { label: "Happy Clients", value: 75 },
    { label: "Solutions Built", value: 30 },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    let intervals = [];

    const startCounting = () => {
      stats.forEach((item, index) => {
        let current = 0;
        const step = Math.ceil(item.value / 60);

        const interval = setInterval(() => {
          current += step;
          if (current > item.value) current = item.value;

          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = current;
            return updated;
          });

          if (current >= item.value) clearInterval(interval);
        }, 20);

        intervals.push(interval);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          intervals.forEach(clearInterval);
          intervals = [];
          setCounts(stats.map(() => 0));
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      intervals.forEach(clearInterval);
      observer.disconnect();
    };
  }, []);

  // --- Smart Chat Button State ---
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <footer className={`${darkMode ? "bg-slate-500 text-gray-100" : "bg-slate-900 text-white"}`}>
      <div className="max-w-[1100px] mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xl md:text-2xl font-semibold text-center md:text-left">
          Delivering reliable software solutions to businesses worldwide.
        </p>
        <div ref={sectionRef} className="flex gap-6 text-center justify-center mt-10">
          {stats.map((item, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold">{counts[i]}+</h2>
              <p className="text-sm text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-400">
        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>

          <div className="flex items-start gap-4">
            <FaPhone className="text-2xl mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+251901375553 / +25902276248</p>
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
            <MdOutlineFacebook className="hover:text-blue-500" />
            <FaTiktok className="hover:text-pink-500" />
            <FaTelegram className="hover:text-blue-400" />
            <FaSquareYoutube className="hover:text-red-600" />
          </div>
        </div>

        {/* Categories */}
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

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Quick Links</h2>
          <div className="flex flex-col gap-3 text-gray-300 text-lg">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contacts">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} SomTechDev. All rights reserved.
      </div>

    {/* Smart Support */}
{chatOpen && <ChatWidget onClose={() => setChatOpen(false)} />}

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

  {/* Menu */}
  <div
    className={`transition-all duration-300 origin-bottom-right ${
      menuOpen
        ? "scale-100 opacity-100"
        : "scale-90 opacity-0 pointer-events-none"
    }`}
  >
    <div
      className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80
                 border border-white/20 dark:border-gray-700
                 shadow-2xl rounded-2xl p-3 flex flex-col gap-2"
    >
      {/* AI Help */}
      <button
        onClick={() => {
          setChatOpen(true);
          setMenuOpen(false);
        }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl
                   hover:bg-indigo-50 dark:hover:bg-gray-800
                   transition"
      >
        <div className="w-10 h-10 rounded-full bg-indigo-500/10
                        flex items-center justify-center">
          <BsChatDotsFill className="text-indigo-600 text-lg" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-sm">AI Assistant</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Ask anything
          </p>
        </div>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/251901375553"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 rounded-xl
                   hover:bg-green-50 dark:hover:bg-gray-800
                   transition"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/10
                        flex items-center justify-center">
          <FaWhatsapp className="text-green-500 text-lg" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-sm">WhatsApp</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Talk to human
          </p>
        </div>
      </a>
    </div>
  </div>

  {/* Floating Button */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="w-16 h-16 rounded-full
               bg-gradient-to-br from-indigo-500 to-blue-600
               text-white shadow-xl
               flex items-center justify-center
               text-2xl
               hover:scale-105 active:scale-95
               transition-all duration-200"
    aria-label="Smart Support"
  >
    <BsChatDotsFill />
  </button>
</div>


    </footer>
  );
}

export default Footers;
