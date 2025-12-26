import React, { useEffect, useRef, useState } from "react";
import { FaLocationDot, FaPhone,FaSquareYoutube, FaTelegram, FaTiktok} from "react-icons/fa6";
import { MdOutlineFacebook, MdOutlineMailOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/image/what.png";

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
  return (
    <footer
      className={`${
        darkMode ? "bg-slate-500 text-gray-100" : "bg-slate-900 text-white"
      }`}
    >
      
   <div className="max-w-[1100px] mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
  <p className="text-xl md:text-2xl font-semibold text-center md:text-left">
    Delivering reliable software solutions to businesses worldwide.
  </p>
 <div
      ref={sectionRef}
      className="flex gap-6 text-center justify-center mt-10"
    >
      {stats.map((item, i) => (
        <div key={i}>
          <h2 className="text-3xl font-bold">{counts[i]}+</h2>
          <p className="text-sm text-gray-300">{item.label}</p>
        </div>
      ))}
    </div>
</div>


      
      <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-blue-500">
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
            <MdOutlineFacebook className="hover:scale-125 duration-500 size-10" />
            <FaTiktok className="hover:scale-125 duration-500 size-10" />
            <FaTelegram className="hover:scale-125 duration-500 size-10" />
            <FaSquareYoutube className="hover:scale-125 duration-500 size-10" />
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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contacts">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500 text-center py-4 text-sm">
        © {new Date().getFullYear()} SomTechDev. All rights reserved.
      </div>

     
      <a
        href="https://wa.me/251901375553"
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
  );
}

export default Footers;
