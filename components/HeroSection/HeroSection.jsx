"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu} from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import Modal from "../Modal/Modal";



const HeroSection = () => {
  const [ open, setOpen ] = useState(false);

  return (
    <div className="bg-[url('https://images.pexels.com/photos/17928278/pexels-photo-17928278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1500')] w-full bg-center bg-cover bg-no-repeat relative"> 
      <div className="flex justify-between items-center gap-3 p-4 w-full">
        <div className="z-10">
          <Image src="/images/logo.png" alt="hero" width={50} height={50} className="rounded-md"/>
        </div>

        { !open && (

          <div className="flex justify-center items-center gap-2">
            <div className="text-lg font-sans px-5 py-2 rounded-md bg-white w-fit border border-[#dfdfe0]">
              <span>Join</span>
            </div>

            <div className="p-1" onClick={() => setOpen(true)}>
              <HiOutlineMenu className="text-white text-3xl"/>
            </div>
          </div>
        )}

        { open && (
          <div className="flex w-full justify-between items-center z-10 gap-2"> 
            <div className="bg-white flex justify-between items-center w-full rounded-md px-2 py-1 gap-1" >
              <div className="flex justify-center items-center">
                <BiImageAlt className="text-2xl text-gray-500"/>
                <MdOutlineKeyboardArrowDown className="text-xl text-gray-500"/>
              </div>
              <div >
                <input type="text"  placeholder="Search for free photos" className="p-1 text-base font-medium outline-2 w-full border-l" />
              </div>
              <div>
                <HiOutlineSearch className="text-xl text-gray-400"/>
              </div>
            </div>

            <div onClick={() => setOpen(false)}>
              <IoClose className="text-white text-2xl font-bold"/>
            </div>

          </div>
        )}


      </div> 

      <div className="p-5 mt-10">
        <p className="text-white text-4xl font-medium leading-tight">
          The best free stock photos, royal free images & videos shared by creators.
        </p>
      </div>       

      <div className="bg-white flex justify-between items-center rounded-md px-2 py-1 gap-1 mx-5" >
        <div className="flex justify-center items-center bg-gray-100 rounded-md border border-gray-400 p-2">
          <BiImageAlt className="text-3xl text-gray-500"/>
          <MdOutlineKeyboardArrowDown className="text-2xl text-gray-500"/>
        </div>
        <div >
          <input type="text"  placeholder="Search for free photos" className="px-2 py-3 text-xl font-medium outline-2 w-full" />
        </div>
        <div>
          <HiOutlineSearch className="text-2xl text-gray-400"/>
        </div>
      </div>

      <div className="flex justify-baseline items-center text-xl text-white font-bold mx-5 my-10 overflow-hidden gap-1">
        <span className="text-gray-300"> 
          Trending: 
        </span> 
        <span className="text-white w-full whitespace-nowrap overflow-hidden">smoke, time, team, pattern, data {' '} </span>
        <HiDotsCircleHorizontal className="text-gray-300 text-5xl"/>
      </div>

      <div className="text-lg text-slate-200 font-medium text-right mx-5">
        <span className="text-gray-400">Photo by </span>
        <span>Dang vu hai</span>
      </div>

      <Modal open={open} />

        
    </div>
  )
}

export default HeroSection