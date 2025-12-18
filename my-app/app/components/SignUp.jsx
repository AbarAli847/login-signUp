import React from 'react'

const SignUp = () => {
  return (
    <div> 
          <div className='mt-4 ml-8 '>
                <h1 className='font-semibold ml-4 '>SignUp</h1>
                <div>                    
                 <input type="email" placeholder='example@gmail.com' className='mb-2 w-70 border-2 ml-4 mt-3.5 px-1 py-1 border-gray-300 rounded-ml'/>
                 <input type="password" placeholder=' passsword' className='mb-2 w-70 border-2 ml-4 mt-3.5 px-1 py-1 border-gray-300 rounded-ml' />
                 <input type="password" placeholder='conform passsword' className='mb-2 w-70 border-2 ml-4 mt-3.5 px-1 py-1 border-gray-300 rounded-ml' />                  
                  <button className='w-70 ml-4 border-2 bg-blue-900 text-white py-2 mb-4 mt-4'>SignUp</button>
              </div>
            </div>
    </div>
  )
}

export default SignUp