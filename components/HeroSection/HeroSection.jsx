"use client";

import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDotsCircleHorizontal, HiOutlineMenu } from "react-icons/hi";
import Modal from "../Modal/Modal";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import Navbar from "../NavBar/NavBar";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";


const HeroSection = () => {
  const [ open, setOpen ] = useState(false);

  const { ref, inView} = useInView();


  return (
    <div className="relative">
      <div ref={ref} className="bg-[url('https://images.pexels.com/photos/17928278/pexels-photo-17928278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1500')] w-full bg-center bg-cover bg-no-repeat top-0 pb-5" style={{position: open ? "fixed" : "relative"}}> 
        <div className="relative">
          <MobileNavBar open={open} setOpen={setOpen} />
        </div>


        <div className="relative">
          <Modal open={open} />
        </div>
        <div className="p-5 mt-10">
          <p className="text-white text-4xl font-medium leading-tight">
            The best free stock photos, royal free images & videos shared by creators.
          </p>
        </div>       

        <div className="bg-white flex justify-between items-center rounded-md px-2 py-1 gap-1 mx-5" >
          <div className="flex justify-center items-center bg-gray-100 rounded-md border border-gray-400 p-1">
            <BiImageAlt size={30} className="text-gray-500"/>
            <MdOutlineKeyboardArrowDown size={20}className=" text-gray-500"/>
          </div>
          <div >
            <input type="text"  placeholder="Search for free photos" className="px-2 py-1 text-lg font-medium outline-2 w-full" />
          </div>
          <div>
            <HiOutlineSearch  size={25} className="text-gray-400"/>
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

      </div>

      



      {inView && (
        <div style={{display: open ? "none" : "block"}}>
          <Navbar />
        </div>
      )}


      <div style={{display: inView ? "none" : "block", top:0, position: "fixed"}} className="z-50">
        
        <div className="flex justify-between items-center  p-5 gap-2 bg-white">
          <div>
            <Image src="/images/logo.png" alt="hero" width={50} height={50} className="rounded-md"/>
          </div>

          <div className="bg-slate-100 flex justify-between items-center w-full rounded-md px-2 py-1 gap-1" >
            <div className="flex justify-center items-center">
              <BiImageAlt className="text-2xl text-gray-500"/>
              <MdOutlineKeyboardArrowDown className="text-xl text-gray-500"/>
            </div>
            <div >
              <input type="text"  placeholder="Search for free photos" className="p-1 text-base font-medium outline-2 w-full border-l bg-slate-100" />
            </div>
            <div>
              <HiOutlineSearch className="text-xl text-gray-400"/>
            </div>
          </div>

          <div className="p-1" onClick={() => setOpen(true)}>
            <HiOutlineMenu color="black" size={30} enableBackground={"white"}/>
          </div>
        </div>
      </div>

    </div>



  )
}

export default HeroSection