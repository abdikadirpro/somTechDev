import { Link } from "react-router-dom"
import { MdNightlightRound } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { toggleDarkMode } from "../../PostSlice";


const Header = () => {
   const dispatch = useDispatch();
       const darkMode = useSelector((state)=>state.posts.darkMode);

  
  return ( 
      <div className={darkMode ? " bg-slate-500 text-2xl font-bold font-body  ":" bg-slate-900 text-2xl font-bold font-body  "} >
        <div className="flex justify-between p-4 text-white">
            <h3 className="text-3xl font-bold">SomTechDev</h3>
            <div className="flex justify-center items-center">
                <ul className="flex gap-5 capitalize font-semibold hover:*:underline decoration-primary">
                    <Link to="/">Home </Link>
                    <Link to="/about">about </Link>
                    <Link to="/service">service</Link>
                    <Link to="/blogs">blogs</Link>
                    <Link to="/contacts">contact</Link>
                  
                      <MdNightlightRound onClick={()=>dispatch(toggleDarkMode())}/>
                   
                    
                    <button className="text-slate-200 bg-primary rounded-xl p-1 mb-4 align-middle capitalize ">getstarted</button>
                </ul>

            </div>
        </div>
    </div>
    
  )
}

export default Header