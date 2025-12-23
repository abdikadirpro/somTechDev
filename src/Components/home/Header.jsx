import { Link } from "react-router-dom"
import { MdLightMode, MdMenu, MdClose } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkMode,transEnToSo } from "../../PostSlice"
import { useState } from "react"
import { MdCompareArrows } from "react-icons/md";
import { useTranslation } from "react-i18next"
import som from "../../assets/image/somalia.png"
import eng from "../../assets/image/united-states.png"


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
        } text-xl font-light font-body`}
      >
        <div className="flex justify-between items-center p-4">
<h3 className="
  dots-after
  text-3xl md:text-4xl font-extrabold
  bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400
  bg-clip-text text-transparent
  tracking-wide
  drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]
  hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.6)]
  transition-all duration-500
">
  SomTechDev
</h3>








          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 capitalize  items-center font-light ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contacts">Contact</Link>
             <Link to="/signup" className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Join Now</Link>
            <MdLightMode
              className="cursor-pointer"
              onClick={() => dispatch(toggleDarkMode())}
            />
            
           {trans ?  <button className="flex justify-center text-center items-center" onClick={() => dispatch(transEnToSo(i18n.changeLanguage("en")))}> <img src={som} alt="" className="w-7 h-7" /></button>:
               
                <button className="flex justify-center text-center items-center" onClick={() => dispatch(transEnToSo(i18n.changeLanguage("so")))}> <img src={eng} alt="" className="w-7 h-7" /></button>}
          
          </ul>

          {/* Mobile Menu Button */}

         <button
            className="flex items-center gap-2"
            onClick={() => dispatch(toggleDarkMode())}
          >
            <MdLightMode /> 
          </button>


           {trans ?  <button className="flex items-center gap-2"
            onClick={() => dispatch(transEnToSo(i18n.changeLanguage("en")))}><img src={som} alt="" className="w-7 h-7" /></button>:
           <button className="flex items-center gap-2"
           onClick={() => dispatch(transEnToSo(i18n.changeLanguage("so")))}><img src={eng} alt="" className="w-7 h-7" /></button>}
           
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

        

          <Link onClick={() => setOpen(false)} to="signout" 
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
            Join Now
          </Link>
          
        </ul>
      </div>
    </>
  )
}

export default Header
