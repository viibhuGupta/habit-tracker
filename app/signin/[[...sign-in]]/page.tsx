import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignInPage() {
  return (
    <div className='flex justify-center  items-center w-full  h-screen bg-secondary '>
        <SignIn/>
    </div>
  )
}

export default SignInPage