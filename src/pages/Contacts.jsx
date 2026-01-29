import React from 'react'
import ContactCallToAction from '../Components/contacts/ContactCallToAction'
import ContactContent from '../Components/contacts/ContactContent'
import Footer from '../Components/footer/Footer'
import Footers from '../Components/footer/Footers'
import { useSelector } from 'react-redux'

const Contacts = () => {
    const darkMode = useSelector((state) => state.posts.darkMode)

  return (
  <div className={`${darkMode ? 'bg-[#0000ff00]' : 'bg-[#282828]'}`}>
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