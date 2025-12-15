import React from 'react'
import Web from '../Components/service/Web'
import Application from '../Components/service/Application'
import Software from '../Components/service/Software'
import Maintenance from '../Components/service/Maintenance'
import Branding from '../Components/service/Branding'
import UiUx from '../Components/service/UIUX'
import Footer from '../Components/footer/Footer'
const Service = () => {
  return (
    <div className="flex flex-col gap-20">
    <div className='w-[1100px] mx-auto  '>
    <Web/>
    <Application/>
    <Software/>
    <Maintenance/>
    <Branding/>
    <UiUx/>
     
  
    </div>
     <Footer />
    </div>
  )
}

export default Service