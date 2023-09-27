"use client";

import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import Modal from "../Modal/Modal";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import Navbar from "../NavBar/NavBar";



const HeroSection = () => {
  const [ open, setOpen ] = useState(false);

  return (
    <div>

      <div className="bg-[url('https://images.pexels.com/photos/17928278/pexels-photo-17928278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1500')] w-full bg-center bg-cover bg-no-repeat relative pb-5"> 
        <MobileNavBar open={open} setOpen={setOpen} showCloseBtn={true} />

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

      <Navbar />

      <MobileNavBar open={true} setOpen={setOpen} showHamburger={true} showCloseBtn={false}/>
    </div>
  )
}

export default HeroSection