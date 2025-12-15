import Footer from "../Components/footer/Footer"
import Footers from "../Components/footer/Footers"
import Content from "../Components/home/Content"
import Hero from "../Components/home/Hero"
import Branding from "../Components/service/Branding"
import Maintenance from "../Components/service/Maintenance"
import Software from "../Components/service/Software"
import UiUx from "../Components/service/UIUX"
import Web from "../Components/service/Web"

const Home = () => {
  return (
    <div className="">
    <div className="w-[1100px] mx-auto">
      <Hero />
      <Content/>
      <Web/>
      <Software />
      <Maintenance />
      <Branding />
      <UiUx />
      </div>
      <Footer />
      <Footers />
    </div>
  )
}

export default Home