import Footer from "../Components/footer/Footer"
import Footers from "../Components/footer/Footers"
import Content from "../Components/home/Content"
import Hero from "../Components/home/Hero"
import Application from "../Components/service/Application"
import Branding from "../Components/service/Branding"
import Maintenance from "../Components/service/Maintenance"
import Software from "../Components/service/Software"
import UiUx from "../Components/service/UIUX"
import Web from "../Components/service/Web"
import LanguageSwitcher from "../Components/translate/LanguageSwitcher"


const Home = () => {
  return (
    <div>
   <div className="w-full md:max-w-[1100px] md:mx-auto px-4 min-h-screen">

      <LanguageSwitcher />
      <Hero />
      <Content/>
      <Web/>
      <Software />
      <Application/>
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