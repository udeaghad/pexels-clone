"use client"

import { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu, HiDotsHorizontal } from "react-icons/hi";
import Modal from "../Modal/Modal";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import Navbar from "../NavBar/NavBar";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import { RiVideoLine } from 'react-icons/ri';
import { SiCanva } from 'react-icons/si';
import Link from "next/link";

import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const socialMediaItems = [
  { name: "Facebook", link: "#", icon: RiFacebookFill },
  { name: "Twitter", link: "#", icon: FaTwitter },
  { name: "Instagram", link: "#", icon: BsInstagram },
  { name: "Pinterest", link: "#", icon: FaPinterestP },
  { name: "Youtube", link: "#", icon: AiOutlineYoutube },
]

const RenderSocialMedia = () => {
  return (
    <div className="flex justify-between items-center my-3 mx-5 gap-5">
      {socialMediaItems.map((item, i) => (
        <div key={i} className="font-medium cursor-pointer hover:text-gray-500">
          <item.icon className="text-xl text-gray-400 hover:text-gray-600" />
        </div>
      ))}
    </div>
  )
}


const VideoHeroSection = () => {

  const [open, setOpen] = useState(false);

  const { ref, inView } = useInView({
    initialInView: true,
  });

  const exploreOptions = useRef(null)
  const arrowBtn = useRef(null)
  const exploreBtn = useRef(null)

  const handleOpenExploreBtn = () => {
    if (exploreOptions.current.classList.contains('hidden')) {
      exploreOptions.current.classList.remove('hidden')
      arrowBtn.current.classList.add('rotate-180')
      exploreBtn.current.classList.add('text-gray-300')
      arrowBtn.current.classList.remove('text-white')
    }
  }

  const handleCloseExploreBtn = () => {
    if (!exploreOptions.current.classList.contains('hidden')) {
      exploreOptions.current.classList.add('hidden')
      arrowBtn.current.classList.remove('rotate-180')
      exploreBtn.current.classList.remove('text-gray-300')
      arrowBtn.current.classList.add('text-white')

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
    <div>
      <div className="relative w-full z-5">
        <video src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4" muted autoPlay loop className="absolute w-full h-full top-0 left-0 object-cover brightness-50 -z-10" />
        <div ref={ref} className="w-full h-screen bg-center bg-cover bg-no-repeat top-0 pb-5" style={{ position: open ? "fixed" : "relative" }}>
          <div className="relative">
            <MobileNavBar open={open} setOpen={setOpen} />
          </div>


          <div className="relative">
            <Modal open={open} />
          </div>

          <div className="md:flex flex-col justify-center md:mt-10">

            <div className="p-5 mt-10 md:flex justify-center items-center w-full sm:px-0">
              <p className="text-white text-4xl font-medium sm:w-[85%] lg:w-[70%] xl:w-[50%]">
                The best free stock videos shared by the Pexels community.
              </p>
            </div>

            <div className="md:flex justify-center items-center">
              <div className="bg-white flex justify-start items-center rounded-md px-2 py-1 gap-1 mx-5 sm:w-[85%] lg:w-[70%] xl:w-[50%] lg:justify-center" >
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

            <div className="lg:flex justify-start items-center lg:justify-center">
              <div className="flex justify-start items-center text-base text-white font-bold my-5 gap-1 mx-[8%] lg:w-[70%] xl:w-[50%]">
                <span className="text-slate-300">
                  Trending:
                </span>
                <span className="text-white whitespace-nowrap overflow-hidden">gandhi jayanti, october, mahatma gandhi, batik, natural </span>
              </div>
            </div>
          </div>


          <div className="flex flex-col justify-end items-end gap-1 text-lg text-slate-200 font-medium text-right mx-5 absolute bottom-1 right-1 cursor-pointer -z-10">
            <SiCanva size={30} className="inline-block text-slate-200" />
            <span className="text-base">Click here for Canva video</span>
          </div>

        </div>

        <div style={{ display: inView ? "none" : "block", top: 0, position: "fixed" }} className="z-50 w-full border-b">

          <div className="flex justify-between items-center py-4  px-5 gap-2 bg-white sm:pl-8 lg:pl-14 lg:gap-5">
            <div className="z-10">
              <Link href="/" className="flex justify-center items-center gap-5 cursor-pointer">
                <Image src="/images/logo.png" alt="hero" width={70} height={70} className="rounded-md lg:w-12 lg:l-12" />
                <span className="hidden lg:block font-medium text-2xl">Pexels</span>
              </Link>
            </div>

            <div className="bg-slate-100 flex justify-start items-center w-full rounded-md px-2 py-2 gap-1 sm:mr-10 lg:ml-5" >
              <div className="flex justify-center items-center gap-2 border-r">
                <RiVideoLine className="text-2xl text-gray-500" />
                <span className="hidden sm:block">Videos</span>
                <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
              </div>
              <div className="flex w-full">
                <input type="text" placeholder="Search for free photos" className="p-1 text-base font-medium outline-none w-full bg-slate-100 lg:text-lg lg:p-2" />
              </div>
              <div>
                <HiOutlineSearch className="text-xl text-gray-400" />
              </div>
            </div>

            <div className="hidden lg:flex font-medium text-gray-800 justify-center items-center gap-5">
              <div className="relative">
                <div className="flex justify-center items-center mt-3 pb-3 gap-1 cursor-pointer" onMouseEnter={handleOpenExploreBtn} onMouseLeave={handleCloseExploreBtn}>
                  <div ref={exploreBtn} className="flex">
                    <span>Explore</span>
                    <div ref={arrowBtn} className="text-gray-300">
                      <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                  </div>

                </div>

                <div className="absolute hidden" ref={exploreOptions} onMouseEnter={handleOpenExploreBtn} onMouseLeave={handleCloseExploreBtn}>
                  <div className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-gray-500 absolute -top-2 left-10 z-5" />
                  <div className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-white absolute -top-2 left-10 z-10" />
                  <div className="flex flex-col bg-white text-gray-600 font-normal pt-3 pb-3 rounded-xl gap-1 absolute text-sm w-40 -left-14 border">
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
                <div className=" mt-5 pb-5 flex justify-center items-center gap-1 cursor-pointer" onMouseEnter={handleOpenOthersBtn} onMouseLeave={handleCloseOthersBtn}>
                  <HiDotsHorizontal size={25} className="hover:text-gray-300" />
                </div>

                <div className="absolute hidden" ref={othersOptions} onMouseEnter={handleOpenOthersBtn} onMouseLeave={handleCloseOthersBtn} >
                  <div className="w-0 h-0 border-l-[2.3rem] border-r-[2.3rem] border-l-transparent border-r-transparent border-b-[2.5rem] border-b-gray absolute -top-2.5 -left-7 z-5" />
                  <div className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-white absolute -top-2 -left-6 z-10" />

                  <div className="flex flex-col bg-white text-gray-600 font-normal pt-3 pb-3 rounded-xl gap-1 absolute text-sm -left-44 border">
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


            <div className="flex justify-center items-center sm:gap-5">
              <div className="text-lg font-sans px-5 py-2 rounded-md bg-white w-fit border border-[#05a081] bg-[#05a081] hidden sm:block cursor-pointer">
                <span className="text-white">Join</span>
              </div>
              <div className="p-1 cursor-pointer lg:hidden" onClick={() => setOpen(true)}>
                <HiOutlineMenu color="black" size={30} enableBackground={"white"} />
              </div>

            </div>

          </div>
        </div>

      </div>
      
      <div style={{ display: open ? "none" : "block" }} >
        <Navbar />
      </div>
      
    </div>




  )
}

export default VideoHeroSection