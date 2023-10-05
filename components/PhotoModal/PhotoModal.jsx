"use client"

import { IoClose } from "react-icons/io5";
import { BsBookmarks, BsInfoCircleFill, BsDot } from "react-icons/bs"; 
import { BiHeart } from "react-icons/bi";
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";
import { MdLocationOn, MdLaunch, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import Link from "next/link";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";
import { useEffect } from "react";
import { FaClosedCaptioning } from "react-icons/fa";

const PhotoModal = ({open, photo, photos, handleCloseModal}) => {

  const { ref: start, inView: startView} = useInView();
  const { ref: end, inView: endView} = useInView();

  const { ref: closeBtn, inView: closeBtnView} = useInView();

  const slideLeft = () => {
    const slider = document.getElementById('sliderBar');
    slider.scrollLeft = slider.scrollLeft - 100;
  };



  const slideRight = () => {
    const slider = document.getElementById('sliderBar');
    slider.scrollLeft = slider.scrollLeft + 100;
  }


  return (
    <div className=" h-[100vh] fixed top-0 bottom-0 left-0 right-0 overflow-y-scroll z-50 w-full bg-[#000000de] flex-col sm:flex-row" style={{display: open ? "flex" : "none"}}>
      
      <div className="sm:mt-10 lg:ml-10">
        <div className="flex justify-start items-center"  onClick={() => handleCloseModal()}>
          <IoClose size={30} className="text-white mx-3 cursor-pointer my-2"/>
        </div>
      </div>

      <div className="bg-white p-3 relative w-full sm:mt-8 sm:rounded-xl sm:h-[100vh] sm:w-[85%] sm:overflow-auto sm:p-5 lg:overflow-visible lg:h-fit lg:w-[70%] lg:ml-[5%] lg:p-10">

        <div className="hidden justify-between items-center w-full lg:flex mb-5">
          <div className="flex justify-start items-center gap-5">
            { photo && 
              <div className={`w-14 h-14 rounded-full border`} style={{backgroundColor: photo ? photo.avg_color : "gray"}}>
                <Image src={photo.photographer_url} alt={photo.photographer} width={100} height={100} className="w-full h-full object-cover rounded-full"/>
              </div>
            }

            {photo && 
              <div>
                <h5 className="text-xl whitespace-nowrap">{photo.photographer}</h5>
                <div className="flex justify-start items-center gap-1 text-gray-500 text-lg">
                  <span>Follow</span>
                  <BsDot size={10} />
                  <span>Donate</span>
                </div>
              </div>
            }

          </div>
        </div>



        <div className={`flex justify-between items-center bg-white lg:justify-start lg:gap-3 ${!closeBtnView ? "fixed top-0 left-0 right-0 z-20 p-5 sm:left-16 sm:w-[85%] lg:relative" : "relative"}`}>
          <div className="flex justify-center items-center gap-2">
            <div className="border rounded-md p-2.5 border-gray-300 lg:flex justify-center items-center gap-2 lg:px-4 lg:py-3 hover:border-black">
              <BsBookmarks color="gray" className="text-base lg:text-2xl font-medium"/>
              <span className="hidden lg:block text-lg">Collect</span>
            </div>
            <div className="border rounded-md p-2.5 border-gray-300 lg:flex justify-center items-center gap-2 lg:px-4 lg:py-3 hover:border-black">
              <BiHeart color="gray" className="text-base lg:text-2xl font-medium"/>
              <span className="hidden lg:block text-lg">Like</span>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center gap-2 border border-gray-300 p-3 rounded-lg hover:border-black">
            <div>
              <Image src="/images/canvas-logo.png" alt="canvass-logo" width={25} height={25} />
            </div>
            <span className="text-lg font-[500]">Edit in Canva</span>

          </div>

          <div className="px-1 flex justify-end items-center border-[#05a081] rounded-md bg-[#05a081] hover:bg-[#04886e] focus:bg-[#04886e] active:bg-[#04886e] gap-2 p-1 lg:p-3">
            <div className="text-white text-lg ml-5">
              <span>Free download</span>
            </div>
            <div className="p-1 border-l-2 border-[#04886e] hover:border-[#05a081] focus:border-[#05a081] active:border-[#05a081]">
              <IoIosArrowDown size={20} color="white" />
            </div>
          </div>

        </div>

        <div ref={closeBtn} />

        {photo && (
          <div className="mt-5 w-full flex">
            <Image src={photo.src.original} alt={photo.photographer} width={photo.width} height={photo.height} />
          </div>

        )}

        <div className="mt-5 flex justify-center items-center gap-2 border border-gray-300 mx-3 p-2 rounded-lg lg:hidden">
          <div>
            <Image src="/images/canvas-logo.png" alt="canvass-logo" width={25} height={25} />
          </div>
          <span className="text-lg font-[500]">Edit in Canva</span>

        </div>

        <div className="flex justify-between items-center w-full mt-16 flex-nowrap relative ">
          <div className="lg:flex gap-1 absolute left-0">
            <div className="flex gap-1">
              <IoIosCheckmarkCircle size={20} className="text-gray-300"/>
              <span className="text-gray-500">Free to use</span>
            </div>
            <div className="flex gap-1">
              <MdLocationOn size={20} className="text-gray-300"/>
              <span className="text-gray-500 whitespace-nowrap"> Lizbon, Lisbon, Portek</span>
            </div>

            <div className="hidden lg:flex gap-1">
              <FaClosedCaptioning size={20} className="text-gray-300"/>
              <span className="text-gray-500 whitespace-nowrap">Train in Train Station</span>
            </div>
          </div>

          <div className="flex gap-2 absolute right-0">
            <div className="bg-white border flex p-2 rounded w-fit border-gray-400 flex-nowrap gap-1 justify-center items-center lg:px-5 lg:py-3" >
              <BsInfoCircleFill size={20} className="text-gray-400"/>
              <span className="hidden lg:block">More info</span>

            </div>
            <div className="bg-white border flex py-2 p-2 rounded w-fit border-gray-400 flex-nowrap gap-1 justify-center items-center lg:px-5 lg:py-3">
              <MdLaunch size={20} className="text-gray-400"/>
              <span className="hidden lg:block">Share</span>
            </div>
          </div>
        </div>

        <div  className="mx-3 border-b border-gray-100 mt-12 mb-3"/>

        <div className="flex justify-between items-center w-full lg:hidden">
          <div className="flex justify-start items-center gap-1">
            { photo && 
              <div className={`w-14 h-14 rounded-full border`} style={{backgroundColor: photo ? photo.avg_color : "gray"}}>
                <Image src={photo.photographer_url} alt={photo.photographer} width={100} height={100} className="w-full h-full object-cover rounded-full"/>
              </div>
              

              }

            {photo && 
              <h5 className="text-lg text-gray-700 whitespace-nowrap">{photo.photographer}</h5>
            }

          </div>

          <div className="flex gap-3 h-10">
            <div className=" flex justify-center items-center border rounded-md p-2 border-gray-300 w-fit">
              <AiOutlineUserAdd size={25} className="text-gray-500"/>
            </div>
            <div className="border border-gray-800 bg-gray-800 text-white text-lg px-8 w-fit cursor-pointer rounded-xl flex justify-center items-center">
              <span>Donate</span>
            </div>
          </div>
        </div>

        <div className="mx-5 mt-10 mb-5">
          <h1 className="text-3xl text-gray-800 font-semibold">More like this</h1>
        </div>

        <nav className="relative flex justify-between items-center w-full mt-5 ml-0">
          <div className="absolute bg-gradient-to-r w-12 h-16 from-white justify-start items-center cursor-pointer" style={{display: startView && !endView ? "none" : !startView && !endView ? "flex" : "flex"}}>
            <MdKeyboardArrowLeft size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideLeft}/>

          </div>

          <div id="sliderBar" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-5 flex gap-2">
            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#" ref={start}>
                35mm
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                35mm Camera
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                35mm Film
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Beautiful
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Botanic Garden
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Film Photo
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Film Photography
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Kodak
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Leisure
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Lomography
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:bg-[#ffc864] hover:border-[#ffc864] cursor-pointer inline-block border-gray-300">
              <Link href="#" ref={end}>
                Photo grain
              </Link>
            </span>
          </div>
          

          
          <div className="absolute bg-gradient-to-l w-12 h-16 from-white justify-end items-center right-0 cursor-pointer" style={{display: !startView && endView ? "none" : !startView && !endView ? "flex": "flex"}}>
            <MdKeyboardArrowRight size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideRight}/>

          </div>
        </nav>
        <div className="mt-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{300: 1, 750: 2}}
          >
            <Masonry >
              {photo && photos.map((item, i) => { 
                if (item.id !== photo.id) {
                  return (
                    <div key={i} className="relative z-5 p-2">
                      <Image src={item.src.original} alt={item.photographer} width={item.width} height={item.height} className="w-full h-full object-cover"/>
                      <FiDownload size={25} className="absolute bottom-5 right-5 text-white cursor-pointer hover:text-gray-500 sm:hidden"/>
                    </div>
                  )
              }})}           
              
            </Masonry>
          </ResponsiveMasonry>
        </div>
        
      </div>

    </div>
  )
}

export default PhotoModal