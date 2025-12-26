import { Link } from "react-router-dom"
import { MdLightMode, MdMenu, MdClose } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkMode, transEnToSo } from "../../PostSlice"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import som from "../../assets/image/somalia.png"
import eng from "../../assets/image/united-states.png"

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
          darkMode ? "bg-slate-500" : "bg-slate-900"
        } text-white text-xl font-light font-body h-16`}
      >
        <div className="flex justify-between items-center p-4">
          
          {/* LOGO */}
          <h3 className="
            dots-after text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400
            bg-clip-text text-transparent tracking-wide
          ">
            SomTechDev
          </h3>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 capitalize items-center">
            <Link to="/" className="hover:underline decoration-blue-500">Home</Link>
            <Link to="/about" className="hover:underline decoration-blue-500">About</Link>
            <Link to="/service" className="hover:underline decoration-blue-500">Service</Link>
            <Link to="/blogs" className="hover:underline decoration-blue-500">Blogs</Link>
            <Link to="/contacts" className="hover:underline decoration-blue-500">Contact</Link>

            <Link
              to="/signup"
              className="bg-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600"
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
        ${darkMode ? "bg-slate-600" : "bg-slate-900"} text-white`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl font-bold">Menu</h3>
          <MdClose
            className="text-3xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 p-6 font-semibold">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/service">Service</Link>
          <Link onClick={() => setOpen(false)} to="/blogs">Blogs</Link>
          <Link onClick={() => setOpen(false)} to="/contacts">Contact</Link>

          <Link
            onClick={() => setOpen(false)}
            to="/signup"
            className="bg-blue-500 px-6 py-2 rounded-lg text-center"
          >
            Join Now
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Header
