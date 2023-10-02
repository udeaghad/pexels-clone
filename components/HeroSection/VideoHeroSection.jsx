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
import { RiVideoLine } from 'react-icons/ri';
import { SiCanva } from 'react-icons/si';

const VideoHeroSection = () => {

  const [open, setOpen] = useState(false);

  const { ref, inView } = useInView();

  return (
    
      <div>

        <div className="relative w-full h-[full] z-5">
          <video src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4" muted autoPlay loop className="absolute w-full h-full top-0 left-0 object-cover" />
          <div ref={ref} className="w-full bg-center bg-cover bg-no-repeat top-0 pb-5" style={{ position: open ? "fixed" : "relative" }}>
            <div className="relative">
              <MobileNavBar open={open} setOpen={setOpen} />
            </div>


            <div className="relative">
              <Modal open={open} />
            </div>

            <div className="p-5 mt-10 md:flex justify-center items-center w-full sm:px-0">
              <p className="text-white text-4xl font-medium sm:w-[85%] lg:w-[55%]">
                The best free stock videos shared by the Pexels community.
              </p>
            </div>

            <div className="md:flex justify-center items-center">
              <div className="bg-white flex justify-start items-center rounded-md px-2 py-1 gap-1 mx-5 sm:w-[85%] lg:w-[55%] lg:justify-center" >
                <div className="flex justify-center items-center bg-gray-100 rounded-md border border-gray-400 p-1 sm:gap-1">
                  <RiVideoLine size={30} className="text-gray-500" />
                  <span className="hidden sm:block">Videos</span>
                  <MdOutlineKeyboardArrowDown size={20} className=" text-gray-500" />
                </div>
                <div className="flex w-full">
                  <input type="text" placeholder="Search for free videos" className="px-2 py-1 text-lg font-medium outline-none w-full" />
                </div>
                <div>
                  <HiOutlineSearch size={25} className="text-gray-400 text-end" />
                </div>
              </div>

            </div>

            <div className="lg:flex justify-start items-center">
              <div className="flex justify-start items-center text-base text-white font-bold mx-5 my-10 gap-1 sm:ml-[8%] lg:ml-[23%]">
                <span className="text-gray-300">
                  Trending:
                </span>
                <span className="text-white whitespace-nowrap overflow-hidden">gandhi jayanti, october, mahatma gandhi, batik, natural {' '} </span>
                <HiDotsCircleHorizontal size={20} className="text-gray-300" />
              </div>
            </div>

            <div className=" flex flex-col justify-end items-end gap-3 text-lg text-slate-200 font-medium text-right mx-5 cursor-pointer">
              <SiCanva size={30} className="inline-block text-slate-200" />
              <span className="text-sm">Click here for Canva video</span>
            </div>

          </div>

          {/* {inView && (
            <div style={{ display: open ? "none" : "block" }} className="mt-20">
              <Navbar />
            </div>
          )} */}


          <div style={{ display: inView ? "none" : "block", top: 0, position: "fixed" }} className="z-50 w-full">

            <div className="flex justify-between items-center  p-5 gap-2 bg-white">
              <div>
                <Image src="/images/logo.png" alt="hero" width={50} height={50} className="rounded-md" />
              </div>

              <div className="bg-slate-100 flex justify-start items-center w-full rounded-md px-2 py-1 gap-1 sm:mr-10" >
                <div className="flex justify-center items-center">
                  <BiImageAlt className="text-2xl text-gray-500" />
                  <span className="hidden sm:block">Photos</span>
                  <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
                </div>
                <div className="flex w-full">
                  <input type="text" placeholder="Search for free photos" className="p-1 text-base font-medium outline-none w-full border-l bg-slate-100" />
                </div>
                <div>
                  <HiOutlineSearch className="text-xl text-gray-400" />
                </div>
              </div>

              <div className="flex justify-center items-center sm:gap-5">
                <div className="text-lg font-sans px-5 py-2 rounded-md bg-white w-fit border border-[#05a081] bg-[#05a081] hidden sm:block">
                  <span>Join</span>
                </div>
                <div className="p-1" onClick={() => setOpen(true)}>
                  <HiOutlineMenu color="black" size={30} enableBackground={"white"} />
                </div>

              </div>

            </div>
          </div>

        </div>

        {inView && (
            <div style={{ display: open ? "none" : "block" }} >
              <Navbar />
            </div>
          )}
      </div>



    
  )
}

export default VideoHeroSection