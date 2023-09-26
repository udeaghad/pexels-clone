"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu} from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const HeroSection = () => {
  const [ open, setOpen ] = useState(false);
  return (
    <div className=" p-5 bg-[url('https://images.pexels.com/photos/17928278/pexels-photo-17928278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1500')] w-full bg-center bg-cover bg-no-repeat relative"> 
      <div className="flex justify-between items-center gap-3">
        <div className="z-10">
          <Image src="/images/logo.png" alt="hero" width={50} height={50} className="rounded-md"/>
        </div>

        { !open && (

          <div className="flex justify-center items-center gap-2">
            <div className="text-lg font-sans px-5 py-2 rounded-md bg-white w-fit border border-[#dfdfe0]">
              <span>Join</span>
            </div>

            <div className="p-1" onClick={() => setOpen(true)}>
              <HiOutlineMenu className="text-white text-2xl font-bold"/>
            </div>
          </div>
        )}

        { open && (
          <div className="flex w-full justify-between items-center z-10 gap-2"> 
            <div className="bg-white flex justify-between items-center w-full rounded-md px-2 py-1 gap-1" >
              <div className="flex justify-center items-center">
                <BiImageAlt className="text-2xl text-gray-500"/>
                <MdOutlineKeyboardArrowUp className="text-xl text-gray-500"/>
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

      <div className="bg-black w-full h-[100vh] fixed top-0 bottom-0 left-0 right-0 z-5" style={{display: open ? "block" : "none"}}>
        
        
      </div>    
    </div>
  )
}

export default HeroSection