import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { SiApple } from 'react-icons/si'

function SignIn() {
  return (
    <div>
       <div className="flex flex-col gap-10 my-11 justify-center items-center">
            <h1 className="text-center my-2 capitalize text-4xl font-semibold text-slate-600  ">wellcome!</h1>
            <div className="flex flex-col w-[450px]">
              <form action="" className="flex flex-col gap-4 ">
                
                <input type="email" placeholder='email'
                className="outline-none border border-slate-300  p-3 focus:ring-1 focus:ring-blue-500"
                />
                <input type="password" placeholder='password'
                 className="outline-none border border-slate-300 p-3 focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-500 p-3 rounded-sm text-white">SigIn</button>
      
              </form>
              <p className="my-5 text-center text-slate-500"> or signIn with</p>
              <div className="flex flex-row justify-center items-center my-4 gap-5">
                  <FcGoogle className="border border-blue-400 rounded-full w-[50px] cursor-pointer h-[50px]" />
                  <SiApple  className="border border-blue-400 rounded-full w-[50px] cursor-pointer h-[50px]"/>
      
              </div>
            </div>
          </div>
    </div>
  )
}

export default SignIn
