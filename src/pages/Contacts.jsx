import React from 'react'
import ContactCallToAction from '../Components/contacts/ContactCallToAction'
import ContactContent from '../Components/contacts/ContactContent'
import Footer from '../Components/footer/Footer'

const Contacts = () => {
  return (
<div className="flex flex-col gap-y-7 ">
      <ContactCallToAction />
      <ContactContent />
      <Footer />
    </div>
  )
}

export default Contacts