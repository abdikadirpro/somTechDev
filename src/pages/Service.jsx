
import Web from '../Components/service/Web'
import Application from '../Components/service/Application'
import Software from '../Components/service/Software'
import Maintenance from '../Components/service/Maintenance'
import Branding from '../Components/service/Branding'
import UiUx from '../Components/service/UIUX'
import Footer from '../Components/footer/Footer'
import Footers from '../Components/footer/Footers'
const Service = () => {
  return (
    <div className="flex flex-col  ">
     <div className="w-full md:max-w-[1100px] md:mx-auto px-4">
    <Web/>
    <Application/>
    <Software/>
    <Maintenance/>
    <Branding/>
    <UiUx/>
     
  
    </div>
     <Footer />
     <Footers />
    </div>
  )
}

export default Service