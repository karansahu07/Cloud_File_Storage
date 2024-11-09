import React from 'react'
import Login from './Login'
import Signup from './Signup'

const index = () => {
    const signUp=true;
  return (
    <div className='w-full grid grid-cols-2   '>
      {signUp ? <Signup/> :<Login/>}

      <div className='h-[1042px] w-[781.5px]  '>
                <img src="/images/authImg.jpeg" className='rounded-s-[45px]  object-cover' alt="authimg" />
            </div>
    </div>
  )
}

export default index
