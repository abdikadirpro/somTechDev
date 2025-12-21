import { Link } from "react-router-dom"
import { MdLightMode, MdMenu, MdClose } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkMode,transEnToSo } from "../../PostSlice"
import { useState } from "react"
import { useTranslation } from "react-i18next"


const Header = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.posts.darkMode)
  const trans = useSelector((state) => state.posts.translateEnToSo)
  const [open, setOpen] = useState(false)
    const { i18n } = useTranslation();
    console.log(trans)

  return (
    
    <>
      {/* HEADER */}
      <header
        className={`${
          darkMode ? "bg-slate-500 text-white" : "bg-slate-900 text-white"
        } text-2xl font-bold`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-3xl font-bold">SomTechDev</h3>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 capitalize font-semibold items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contacts">Contact</Link>
             <Link to="/signup">Get Started</Link>
            <MdLightMode
              className="cursor-pointer"
              onClick={() => dispatch(toggleDarkMode())}
            />
           {trans ?  <button onClick={() => dispatch(transEnToSo(i18n.changeLanguage("en")))}>Eng</button>:
                <button onClick={() => dispatch(transEnToSo(i18n.changeLanguage("so")))}>So</button>}
           
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* LEFT SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        ${darkMode ? "bg-slate-600 text-white" : "bg-slate-900 text-white"}`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl font-bold">Menu</h3>
          <MdClose
            className="text-3xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 p-6 capitalize font-semibold">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/service">Service</Link>
          <Link onClick={() => setOpen(false)} to="/blogs">Blogs</Link>
          <Link onClick={() => setOpen(false)} to="/contacts">Contact</Link>

          <button
            className="flex items-center gap-2"
            onClick={() => dispatch(toggleDarkMode())}
          >
            <MdLightMode /> Theme
          </button>

          <Link onClick={() => setOpen(false)} to="signout">
            Get Started
          </Link>
           {trans ?  <button className="flex items-center gap-2"
            onClick={() => dispatch(transEnToSo(i18n.changeLanguage("en")))}>Eng</button>:
           <button className="flex items-center gap-2"
           onClick={() => dispatch(transEnToSo(i18n.changeLanguage("so")))}>So</button>}
           
        </ul>
      </div>
    </>
  )
}

export default Header
