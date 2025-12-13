import { GiStarsStack } from "react-icons/gi";

const ContactCallToAction = () => {
  return (
   <div className="flex flex-col justify-center items-center w-full sm:w-1/4 md:w-1/3 lg:w-1/2 gap-3 p-2 mt-5 border-l border-r border-slate-400 max-w-[1100px] mx-auto">
     
    <p className='bg-slate-500 p-3 flex flex-row gap-4 items-center rounded-xl text-white font-normal'>
        <  GiStarsStack className="text-blue-400" />
        Let's Create Something Amazing</p>
    <h1 className="text-5xl font-semibold capitalize text-slate-500">Get in Touch</h1>
    <p className="text-2xl font-lightg">Have questions about our services? Want to collaborate? Or 
         just want to say hello? <span className="text-blue-400">We're here to help you succeed!</span></p>
    </div>
  )
}

export default ContactCallToAction
