import { useSelector } from "react-redux"
import About from "../Components/about/About"
import Footer from "../Components/footer/Footer"
import Footers from "../Components/footer/Footers"


const Abouts = () => {
    const darkMode = useSelector((state) => state.posts.darkMode)

  return (
    <div className={`${darkMode ? 'bg-[#0000ff00]y' : 'bg-[#282828]'}`}>
      <div>
        <About />
      </div>
    <Footer />
    <Footers />
    </div>
  )
}

export default Abouts