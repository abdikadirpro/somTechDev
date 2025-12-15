import React from 'react'
import ContactCallToAction from '../Components/contacts/ContactCallToAction'
import ContactContent from '../Components/contacts/ContactContent'
import Footer from '../Components/footer/Footer'
import Footers from '../Components/footer/Footers'

const Contacts = () => {
  return (
<div className="">
  <div className="flex flex-col gap-20 ">
      <ContactCallToAction />
      <ContactContent />
      <Footer />
      
    </div>
    <Footers />
</div>
  )
}

export default Contacts