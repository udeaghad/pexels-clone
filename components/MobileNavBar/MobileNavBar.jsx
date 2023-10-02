import Image from "next/image";
import { HiOutlineMenu} from "react-icons/hi";
import { HiOutlineSearch, HiDotsHorizontal } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const MobileNavBar = ({open, setOpen, showHamburger}) => {
  return (
    <div className="flex justify-between items-center gap-3 p-4 w-full">
      <div className="z-10">
        <Image src="/images/logo.png" alt="hero" width={50} height={50} className="rounded-md"/>
      </div>

      { !open && (

        <div className="flex justify-center items-center gap-2 md:gap-5">
          <div className="hidden md:flex text-white text-lg font-bold justify-center items-center gap-5">
            <div className="relative">
              <div className="flex justify-center items-center gap-1">
                <span className="hover:text-gray-300">Explore</span>
                <MdOutlineKeyboardArrowDown size={25} className="text-white"/>
              </div>

              <div className="absolute mt-3">
                <div  className="w-0 h-0 border-l-[2rem] border-r-[2rem] border-l-transparent border-r-transparent border-b-[2rem] border-b-white absolute -top-3 left-10 z-10"/>
                <div className="flex flex-col bg-white text-gray-600 font-normal pl-5 pt-5 pb-5 rounded-xl gap-3 absolute text-base w-40 -left-14 border"> 
                  <span>Discover Photos</span>
                  <span>Popular Searches</span>
                  <span>Leaderboard</span>
                  <span>Challenges</span>
                  <span>Free Videos</span>
                  <span>Pexels Blog</span>
                </div>

              </div>

            </div>

            <div className="flex justify-center items-center gap-1 hover:text-gray-300">
              <span>Licence</span>
            </div>

            <div className="flex justify-center items-center gap-1 hover:text-gray-300">
              <span>Upload</span>
            </div>

            <div className="flex justify-center items-center gap-1 hover:text-gray-300">
              <HiDotsHorizontal size={25} className="text-white hover:text-gray-300"/>
            </div>
              

          </div>
          

          <div className="text-lg font-sans px-5 py-2 rounded-md bg-white w-fit border border-[#dfdfe0]">
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