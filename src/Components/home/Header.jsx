import { Link } from "react-router-dom"

const Header = () => {
  return ( 
    <div className="bg-slate-500 text-2xl font-bold font-body">
        <div className="flex justify-between p-4 text-white">
            <h3 className="text-3xl font-bold">SomTechDev</h3>
            <div className="flex justify-center items-center">
                <ul className="flex gap-5 capitalize font-semibold hover:*:underline decoration-primary">
                    <Link to="/">Home change</Link>
                    <Link to="/about">about </Link>
                    <Link to="/service">service</Link>
                    <Link to="/blogs">blogs</Link>
                    <Link to="/contacts">contact</Link>
                    <button className="text-slate-500 bg-primary rounded-xl p-1 mb-4 align-middle capitalize ">getstarted</button>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Header