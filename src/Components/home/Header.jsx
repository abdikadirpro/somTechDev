import { Link } from "react-router-dom"
import { MdLightMode, MdMenu, MdClose } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkMode, transEnToSo } from "../../PostSlice"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import som from "../../assets/image/somalia.png"
import eng from "../../assets/image/united-states.png"
import logo from "../../assets/image/logo.png"

const Header = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.posts.darkMode)
  const trans = useSelector((state) => state.posts.translateEnToSo)
  const [open, setOpen] = useState(false)
  const { i18n } = useTranslation()

  return (
    <>
      {/* HEADER */}
      <header
        className={` fixed top-0 left-0 w-full z-50   ${
          darkMode ? "bg-blue-950" : "bg-[#1e1e1e]"
        } text-white text-xl font-light font-body h-20`}
      >
        {/* <style>
          color: #1e1e1e
        </style> */}
        <div className="flex justify-between items-center p-5">
          
          {/* LOGO */}
         <div className="flex items-center">
        <img
          src={logo}
          alt="HornTechDev"
          className="w-14 h-14 md:w-18 md:h-18 object-contain"  // standard size
        />
      </div>



          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-5 capitalize items-center transition-all duration-300 ease-in-out">
            <div className="relative group">
              <Link className="text-lg" to="/">Home</Link>
              <span className="absolute w-10 h-0.5 top-7 left-0 bg-blue-600 opacftiy-0 invisdible gruop:hover:visible group:hover:opacity-100"></span>
            </div>
            <div className="relative group">
              <Link className="text-lg " to="/about">About</Link>
              <span className="absolute w-10 h-0.5 top-7 left-0 bg-blue-600 opactiy-0 invisible gruop:hover:visible group:hover:opacity-100"></span>
            </div>
            <div className="relative group">
              <Link className="text-lg " to="/service">Service</Link>
              <span className="absolute w-10 h-0.5 top-7 left-0 bg-blue-600 opactiy-0 invisible gruop:hover:visible group:hover:opacity-100"></span>
            </div>
            <div className="relative group">
              <Link className="text-lg " to="/blogs">Blogs</Link>
              <span className="absolute w-10 h-0.5 top-7 left-0 bg-blue-600 opactiy-0 invisible gruop:hover:visible group:hover:opacity-100"></span>
            </div>
            <div className="relative group">
              <Link className="text-lg " to="/contacts">Contact</Link>
              <span className="absolute w-10 h-0.5 top-7 left-0 bg-blue-600 opactiy-0 invisible gruop:hover:visible group:hover:opacity-100"></span>
            </div>

            <Link
              to="/signup"
              className="bg-blue-700 px-5 py-1 rounded-lg font-semibold text-lg hover:bg-blue-700/80"
            >
              Join Now
            </Link>

            <MdLightMode
              className="cursor-pointer text-2xl"
              onClick={() => dispatch(toggleDarkMode())}
            />

            {trans ? (
              <button onClick={() => dispatch(transEnToSo(i18n.changeLanguage("en")))}>
                <img src={som} className="w-7 h-7" />
              </button>
            ) : (
              <button onClick={() => dispatch(transEnToSo(i18n.changeLanguage("so")))}>
                <img src={eng} className="w-7 h-7" />
              </button>
            )}
          </ul>

          
          <div className="flex items-center gap-3 md:hidden">
            
            <button onClick={() => dispatch(toggleDarkMode())}>
              <MdLightMode className="text-2xl" />
            </button>

            {trans ? (
              <button onClick={() => dispatch(transEnToSo(i18n.changeLanguage("en")))}>
                <img src={som} className="w-7 h-7" />
              </button>
            ) : (
              <button onClick={() => dispatch(transEnToSo(i18n.changeLanguage("so")))}>
                <img src={eng} className="w-7 h-7" />
              </button>
            )}

            {/* BURGER (UNCHANGED STYLE) */}
            <button
              className="text-3xl"
              onClick={() => setOpen(true)}
            >
              <MdMenu />
            </button>
          </div>

        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        ${darkMode ? "bg-blue-950" : "bg-slate-900"} text-white`}
      >
        <div className="flex justify-between items-center p-5">
          <h3 className="text-2xl font-bold">Menu</h3>
          <MdClose
            className="text-3xl cursor-pointer text-red-600"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col font-semibold">
          <Link onClick={() => setOpen(false)} className="transition-all duration-300 hover:bg-blue-900/50 px-5 py-3" to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="transition-all duration-300 hover:bg-blue-900/50 px-5 py-3" to="/about">About</Link>
          <Link onClick={() => setOpen(false)} className="transition-all duration-300 hover:bg-blue-900/50 px-5 py-3" to="/service">Service</Link>
          <Link onClick={() => setOpen(false)} className="transition-all duration-300 hover:bg-blue-900/50 px-5 py-3" to="/blogs">Blogs</Link>
          <Link onClick={() => setOpen(false)} className="transition-all duration-300 hover:bg-blue-900/50 px-5 py-3" to="/contacts">Contact</Link>

          <Link
            onClick={() => setOpen(false)}
            to="/signup"
            className="bg-blue-700 hover:bg-blue-700/80 px-5 py-1 rounded-lg text-center m-5"
          >
            Join Now
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Header
