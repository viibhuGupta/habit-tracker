'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import app from "@/public/assets/images/app.jpg"
import { useAuth } from '@clerk/nextjs'

export default function HeroSection() {

  const {userId} = useAuth();
  return (
    <div className='flex justify-center  items-center flex-col gap-2 md:gap-20  '>
        <div className="p-4 mt-8 md:mt-32  flex items-center justify-center text-center flex-col max-w-[35rem] gap-6">
            <h1 className='text-4xl font-bold tracking-wider'>Build the habits that <span className='text-accent'>matter!</span></h1>
            <p className='text-lg'>Feeling overwhelmed? Our easy-to-use habit tracker helps you take control of your day and achieve your goals. </p>
            <div>
              {
                userId ? (
                  <div className="">
                    <Link className='btn bg-accent w-auto pl-20 pr-20 p-2' href="/dashboard">Lets Get Started</Link>
                  </div>
                ) : (
                  <div className="">
                    <Link className='btn bg-accent w-auto pl-20 pr-20 p-2' href="/signin">Lets Get Started</Link>
                  </div>
                )
              }
            </div>
        </div>

       <div className='bg-bgColor '>
       <div className="w-auto  h-auto pl-2 pr-2 pb-2 ">
            <Image src={app} width={1000} height={900} alt='app'/>
        </div>
       </div>
    </div>
  ) 
}
