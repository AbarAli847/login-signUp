 "use client"
import React, { useState } from 'react'
import SignUp from './SignUp';

const AuthForm = () => {
    const [islogin, setislogin] = useState(true);
      return (
    <div className="bg-blue-500 h-screen w-screen flex justify-center items-center">
      
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg">        
        <div className="flex justify-center  p-4 pb-2">
           <button className={`px-8 py-2 rounded ${islogin ? "bg-blue-900 text-white":" bg-gray-200 text-black"}`} 
            onClick={()=>setislogin(true)}>Login</button>
           <button className={`px-8 py-2  rounded ${islogin ? "bg-gray-200 text-black":"bg-blue-900 text-white"}`}
            onClick={()=>setislogin(false)}>SignUp</button>
        </div>        

            {islogin ? <>
            <div className='mt-4 ml-8 '>
                <h1 className='font-semibold ml-4 '>Login form</h1>
                <div >                    
                <input type="email" placeholder='example@gmail.com' className='mb-2 w-70 border-2 ml-4 mt-3.5 px-1 py-1 border-gray-300 rounded-ml'/>
                <input type="password" placeholder='enter your passsword' className='mb-2 w-70 border-2 ml-4 mt-3.5 px-1 py-1 border-gray-300 rounded-ml' />
                 <a className='ml-45 text-blue-600 font-medium' href='#'>ForgetPassword?</a>
                  <button className='w-70 ml-4 border-2 bg-blue-900 text-white py-2 mb-4 mt-4'>Login</button>
                  <p className='flex justify-center items-center mb-6'>Not a Member?<a href='#' onClick={()=>setislogin(false)} className='text-blue-600 '>Signup now</a></p>
                </div>
            </div>
            </>:<SignUp/>}
      </div>
    </div>
  )
}

export default AuthForm
