import {  SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-secondary '>
        <SignUp/>
    </div>
  )
}

export default SignUpPage