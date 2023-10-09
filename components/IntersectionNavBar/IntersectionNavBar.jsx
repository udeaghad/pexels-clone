import { useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu, HiDotsHorizontal } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const socialMediaItems = [
  {name: "Facebook", link: "#", icon: RiFacebookFill},
  {name: "Twitter", link: "#", icon: FaTwitter},
  {name: "Instagram", link: "#", icon: BsInstagram},
  {name: "Pinterest", link: "#", icon: FaPinterestP},
  {name: "Youtube", link: "#", icon: AiOutlineYoutube},  
]

const RenderSocialMedia = () => {
  return (
    <div className="flex justify-between items-center my-3 mx-5 gap-5">
      {socialMediaItems.map((item, i) => (
        <div key={i} className="font-medium cursor-pointer hover:text-gray-500">
          <item.icon className="text-xl text-gray-400 hover:text-gray-600"/>
        </div>
      ))}
    </div>
  )
}

const IntersectionNavBar = ({setOpen, open}) => {

  const exploreOptions = useRef(null)
  const arrowBtn = useRef(null)
  const exploreBtn = useRef(null)

  const handleOpenExploreBtn = () => {
    if (exploreOptions.current.classList.contains('hidden')) {
      exploreOptions.current.classList.remove('hidden')
      arrowBtn.current.classList.add('rotate-180') 
      exploreBtn.current.classList.add('text-gray-300') 
      
    }   
  }

  const handleCloseExploreBtn = () => {
    if (!exploreOptions.current.classList.contains('hidden')) {
      exploreOptions.current.classList.add('hidden')
      arrowBtn.current.classList.remove('rotate-180') 
      exploreBtn.current.classList.remove('text-gray-300')
               
    }
  }
  const othersOptions = useRef(null)

  const handleOpenOthersBtn = () => {
    if (othersOptions.current.classList.contains('hidden')) {
      othersOptions.current.classList.remove('hidden')
    }   
  }

  const handleCloseOthersBtn = () => {
    if (!othersOptions.current.classList.contains('hidden')) {
      othersOptions.current.classList.add('hidden')
    }
  }


  return (
    <div className="flex justify-between items-center py-4  px-5 gap-2 bg-white sm:pl-8 lg:pl-14 lg:gap-5 border-b">
      <div className="z-10">
        <Link href="/" className="flex justify-center items-center gap-5 cursor-pointer">
          <Image 
            src="/images/logo.png" 
            alt="hero" 
            width={70} 
            height={70} 
            className={`rounded-md lg:w-12 lg:l-12 ${open ? "hidden" : "block"}`} />
          <span className="hidden lg:block font-medium text-2xl">Pexels</span>
        </Link>
      </div>

      <div className="bg-slate-100 flex justify-start items-center w-full rounded-md px-2 py-2 gap-1 sm:mr-10 lg:ml-5" >
        <div className="flex justify-center items-center gap-2 border-r">
          <BiImageAlt className="text-2xl text-gray-500" />
          <span className="hidden sm:block">Photos</span>
          <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
        </div>
        <div className="flex w-full">
          <input type="text" placeholder="Search for free photos" className="p-2 text-base font-medium outline-none w-full bg-slate-100 lg:text-lg" />
        </div>
        <div>
          <HiOutlineSearch className="text-xl text-gray-400" />
        </div>
      </div>

      <div className="hidden lg:flex font-medium text-gray-800 justify-center items-center gap-5">
        <div className="relative">
          <div 
            className="flex justify-center items-center mt-3 pb-3 gap-1 cursor-pointer" 
            onMouseEnter={handleOpenExploreBtn} 
            onMouseLeave={handleCloseExploreBtn}
          >
            <div ref={exploreBtn} className="flex">
              <span>Explore</span>
              <div ref={arrowBtn} className="text-gray-300">
                <MdOutlineKeyboardArrowDown size={25} />
              </div>
            </div>

          </div>

          <div className="absolute hidden" 
            ref={exploreOptions} 
            onMouseEnter={handleOpenExploreBtn} 
            onMouseLeave={handleCloseExploreBtn}
          >
            <div className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-gray-500 absolute -top-2 left-10 z-5" />
            <div className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-white absolute -top-2 left-10 z-10" />
            <div className="flex flex-col bg-white text-gray-600 font-medium pt-3 pb-3 rounded-xl gap-1 absolute text-sm w-40 -left-14 border">
              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>Discover Photos</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
                <span>Popular Searches</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
                <span>Leaderboard</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
                <span>Challenges</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
                <span>Free Videos</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
                <span>Pexels Blog</span>
              </div>
            </div>

          </div>

        </div>

        <div className="flex justify-center items-center gap-1 hover:text-gray-300 cursor-pointer">
          <span>Licence</span>
        </div>

        <div className="flex justify-center items-center gap-1 hover:text-gray-300 cursor-pointer">
          <span>Upload</span>
        </div>

        <div className="relative">
          <div className=" mt-5 pb-5 flex justify-center items-center gap-1 cursor-pointer" 
            onMouseEnter={handleOpenOthersBtn} 
            onMouseLeave={handleCloseOthersBtn}
          >
            <HiDotsHorizontal size={25} className="hover:text-gray-300" />
          </div>

          <div className="absolute hidden" 
            ref={othersOptions} 
            onMouseEnter={handleOpenOthersBtn} 
            onMouseLeave={handleCloseOthersBtn} 
          >
            <div className="w-0 h-0 border-l-[2.3rem] border-r-[2.3rem] border-l-transparent border-r-transparent border-b-[2.5rem] border-b-gray absolute -top-2.5 -left-7 z-5" />
            <div className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-white absolute -top-2 -left-6 z-10" />

            <div className="flex flex-col bg-white text-gray-600 font-medium pt-3 pb-3 rounded-xl gap-1 absolute text-sm -left-44 border">
              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>Login</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>Join</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>Change Language</span>
              </div>

              <div className="border-b border-gray-100" />

              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>Image & Video API</span>
              </div>

              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>Apps & Plugins</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>FAQ</span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>
                  Partnership
                </span>
              </div>
              <div className="hover:bg-gray-100 px-3 py-1 relative z-20 cursor-pointer">
                <span>
                  Imprint & Terms
                </span>
              </div>

              <div className="border-b border-gray-100" />

              <RenderSocialMedia />

            </div>

          </div>
        </div>
      </div>


      <div className="flex justify-end items-center sm:gap-5">
        <div className="text-lg font-sans px-5 py-2 rounded-md bg-white w-fit border border-[#05a081] bg-[#05a081] hidden sm:block cursor-pointer">
          <span className="text-white">Join</span>
        </div>
        <div className="p-1 cursor-pointer lg:hidden" onClick={() => setOpen(true)}>
          <HiOutlineMenu color="black" size={30} enableBackground={"white"} />
        </div>


      </div>

    </div>
  )
}

export default IntersectionNavBar