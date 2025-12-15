import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

function SignOut() {
  return (
    <div className="flex flex-col gap-20 my-11 justify-center items-center">
      <h1 className="text-center my-4 capitalize text-4xl font-semibold text-slate-600  ">Create a new account</h1>
      <div className="flex flex-col">
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 ">
               <label htmlFor="" className="capitalize">first name</label>
                <input type='tex' placeholder='first'
                className="outline-none border border-slate-400 p-3 focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col gap-2">
               <label htmlFor="">last name</label>
                <input type='tex' placeholder='first'
                className="outline-none border border-slate-300 p-3 focus:ring-1 focus:ring-blue-500"
                />
            </div>
          </div>
          <input type="email" placeholder='email'
          className="outline-none border border-slate-300 p-3 focus:ring-1 focus:ring-blue-500"
          />
          <input type="password" placeholder='password'
           className="outline-none border border-slate-300 p-3 focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-500 p-3 rounded-sm text-white">SignUp</button>

        </form>
        <p className="my-5 text-center text-slate-500"> or signup with</p>
        <div className="flex flex-row justify-center items-center my-4 gap-5">
            <FcGoogle className="border border-blue-400 rounded-full w-[50px] cursor-pointer h-[50px]" />
            <SiApple  className="border border-blue-400 rounded-full w-[50px] cursor-pointer h-[50px]"/>

        </div>
      </div>
    </div>
  )
}

export default SignOut
