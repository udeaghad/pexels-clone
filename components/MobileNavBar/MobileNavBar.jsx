import Image from "next/image";
import { HiOutlineMenu} from "react-icons/hi";
import { HiOutlineSearch, HiDotsHorizontal } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";

import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

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

const MobileNavBar = ({open, setOpen, showHamburger}) => {

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
    <div className="flex justify-between items-center gap-3 p-4 w-full">
      <Link href="/">
        <div className="z-10 flex justify-center items-center gap-5 cursor-pointer">
            <Image src="/images/logo.png" alt="hero" width={50} height={50} className="rounded-md"/>
            <span className="hidden lg:block text-white font-medium text-2xl">Pexels</span>
        </div>
      </Link>


      { !open && (

        <div className="flex justify-center items-center gap-2 md:gap-5">
          <div className="hidden md:flex text-white font-medium justify-center items-center gap-5">
            <div className="relative">
              <div className="flex justify-center items-center mt-3 pb-3 gap-1 cursor-pointer" onMouseEnter={ handleOpenExploreBtn} onMouseLeave={handleCloseExploreBtn}>
                <div ref={exploreBtn} className="flex">
                  <span>Explore</span>
                  <div ref={arrowBtn} className="text-white">
                    <MdOutlineKeyboardArrowDown size={25} />
                  </div>
                </div>

              </div>

              <div className="absolute hidden" ref={exploreOptions} onMouseEnter={handleOpenExploreBtn} onMouseLeave={handleCloseExploreBtn}>
                <div  className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-white absolute -top-2 left-10 z-10"/>
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
                <HiDotsHorizontal size={25} className="text-white hover:text-gray-300"/>
              </div>

              <div className="absolute hidden" ref={othersOptions} onMouseEnter={handleOpenOthersBtn} onMouseLeave={handleCloseOthersBtn} >
              <div  className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-white absolute -top-2 -left-6 z-10"/>
                
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

                  <div className="border-b border-gray-100"/>

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

                  <div className="border-b border-gray-100"/>

                  <RenderSocialMedia />

                </div>
                
              </div>
            </div>

              

          </div>
          

          <div className="text-lg font-sans px-5 py-2 rounded-md bg-white w-fit border border-[#dfdfe0] outline-2 cursor-pointer">
            <span>Join</span>
          </div>

          <div className="p-1 md:hidden" onClick={() => setOpen(true)}>
            <HiOutlineMenu color="white" size={30}/>
          </div>

        </div>
      )}

      

      { open && (
        <div className="flex w-full justify-between items-center z-10 gap-2"> 
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

         
            <div onClick={() => setOpen(false)}>
              <IoClose className="text-white text-2xl font-bold"/>
            </div>
          


          { showHamburger && (
            <div className="p-1" onClick={() => setOpen(true)}>
              <HiOutlineMenu className="text-3xl" color="black"/>
            </div>
          )}

        </div>
      )}
    </div>
  )
}




export default MobileNavBar