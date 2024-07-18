"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/icons/logo.svg";
import { useAuth } from "@clerk/nextjs";
import connectToDB from "@/lib/connectToDB";

export default function Navbar() {
  const {userId} = useAuth();
  // const db = connectToDB();
  return (
    
    <div className="flex flex-col items-center gap-10 md:justify-between md:flex-row  pt-10 pl-20 pr-20 ">
      <Link className="flex items-center gap-4   " href="/">
        <div className="btn w-[60px] h-[60px] bg-accent">
          <Image src={logo} width={50} height={50} alt="logo" />
        </div>
        <h1 className="text-2xl  font-bold ">Habit Tracker</h1>
      </Link>


      <div className="flex gap-10 flex-col items-center  md:flex-row">
        {
          userId ? (
            <Link href={"/dashboard"}>
              <button className="block rounded-lg px-9 py-3 text-sm font-medium text-textColor transition btn bg-accent w-auto pl-[3rem] pr-[3rem] p-2" type="button">Dashboard</button>
            </Link>
          ):(
          <div className="flex  gap-8 flex-col sm:flex-row">
          <Link className="btn bg-accent w-auto pl-[3rem] pr-[3rem] p-2" href="/signup">
          Sign Up
        </Link>
        <Link
          className="btn border border-textColor  hover:bg-accent duration-200 hover:border-accent  w-auto pl-[3rem] pr-[3rem] p-2"
          href="/signin"
        >
          Sign In
        </Link>
          </div>
          )
        }
        
      </div>
    </div>
  );
}
