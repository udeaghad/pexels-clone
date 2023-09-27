"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu} from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";

const navItems1 = [
  {name: "Home", link: "#"},
  {name: "Discover Photos", link: "#"},
  {name: "Popular Searches", link: "#"},
  {name: "Free Videos", link: "#"},
  {name: "Challenges", link: "#"},
  {name: "Leaderboard", link: "#"},
  {name: "Pexels Blog", link: "#"},
]

const navItems2 = [
{name: "Login", link: "#"},
{name: "Join", link: "#"},
{name: "Change Languge", link: "#"},
{name: "Licence", link: "#"},
]

const navItems3 = [
{name: "Apps & Plugins", link: "#"},
{name: "FAQ", link: "#"},
{name: "About Us", link: "#"},
{name: "Imprint & Terms", link: "#"},
]

const socialMediaItems = [
{name: "Facebook", link: "#", icon: RiFacebookFill},
{name: "Twitter", link: "#", icon: FaTwitter},
{name: "Instagram", link: "#", icon: BsInstagram},
{name: "Pinterest", link: "#", icon: FaPinterestP},
{name: "Youtube", link: "#", icon: AiOutlineYoutube},


]

const RenderSocialMedia = () => {
  return (
    <div className="flex justify-between items-center mt-7 mx-5 border-b pb-7 border-gray-800">
      {socialMediaItems.map((item, i) => (
        <div key={i} className="text-white text-xl font-medium cursor-pointer hover:text-gray-500">
          <item.icon className="text-3xl"/>
        </div>
      ))}
    </div>
  )
}

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
              <HiOutlineMenu className="text-white text-2xl font-bold"/>
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
        <p className="text-white text-4xl font-bold leading-tight">
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

      <div className="bg-black w-full h-[100vh] absolute top-0 bottom-0 left-0 right-0 z-5 overflow-auto" style={{display: open ? "block" : "none"}}>

        <div className="w-full border-b h-20 border-gray-800 bg-black fixed"/>

        <div className="flex flex-col justify-start items-start gap-5 mt-28 mx-5 border-b pb-10 border-gray-800">
          {navItems1.map((item, i) => (
            <div key={i} className="text-white text-xl font-medium cursor-pointer hover:text-gray-500">
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-start items-start gap-5 mt-10 mx-5 border-b pb-10 border-gray-800">
          {navItems2.map((item, i) => (
            <div key={i} className="text-white text-xl font-medium cursor-pointer hover:text-gray-500">
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-start items-start gap-5 mt-10 mx-5 pb-10">
          {navItems3.map((item, i) => (
            <div key={i} className="text-white text-xl font-medium cursor-pointer hover:text-gray-500">
              <span>{item.name}</span>
            </div>
          ))}
        </div> 

        <div className="border-t w-full border-gray-800"/>

       
        <RenderSocialMedia />     
        
      </div>    
    </div>
  )
}

export default HeroSection