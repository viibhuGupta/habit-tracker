'use client'
import { SignOutButton, useUser } from '@clerk/nextjs'
import React, { use } from 'react'

function Dashboard() {
    const {user} = useUser();
  return (
    <div className='bg-bgColor w-full h-screen'>
        Hello , {user ?.lastName} <SignOutButton>Sign Out</SignOutButton>
    </div>
  )
}

export default Dashboard