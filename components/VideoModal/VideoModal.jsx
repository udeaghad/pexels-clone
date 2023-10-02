"use client"

import { IoClose } from "react-icons/io5";
import { BsBookmarks, BsInfoCircleFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";
import { MdLocationOn, MdLaunch, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FaYoutube } from "react-icons/fa";


const VideoModal = ({ open, video, videos, handleCloseModal }) => {
  
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
      <div className="sm:mt-10">
        <div className="flex justify-start items-center"  onClick={() => handleCloseModal()}>
          <IoClose size={40} className="text-white mx-3 cursor-pointer my-2"/>
        </div>
      </div>

      <div className="bg-white p-3 relative w-full sm:mt-8 sm:rounded-xl sm:h-[100vh] sm:w-[85%] sm:overflow-auto sm:p-5">
        <div className={`flex justify-between items-center bg-white ${!closeBtnView ? "fixed top-0 left-0 right-0 z-20 p-5 sm:left-16 sm:w-[85%]" : "relative"}`}>
          <div className="flex justify-center items-center gap-2">
            <div className="border rounded-md p-2.5 border-gray-300">
              <BsBookmarks size={16} color="gray"/>
            </div>
            <div className="border rounded-md p-2.5 border-gray-300">
              <BiHeart size={16} color="gray"/>
            </div>
          </div>

          <div className="px-1 flex justify-end items-center border-[#05a081] rounded-md bg-[#05a081] hover:bg-[#04886e] focus:bg-[#04886e] active:bg-[#04886e] gap-2 p-1">
            <div className="text-white text-lg ml-5">
              <span>Free download</span>
            </div>
            <div className="p-1 border-l-2 border-[#04886e] hover:border-[#05a081] focus:border-[#05a081] active:border-[#05a081]">
              <IoIosArrowDown size={20} color="white" />
            </div>
          </div>

        </div>

        <div ref={closeBtn} />

        {video && (
          <div className="mt-5 w-full flex">
            <video src={video.video_files[0].link} type={video.video_files[0].file_type} controls muted autoPlay className="w-full h-full object-cover"/>
          </div>

        )}        

        <div className="flex justify-between items-center w-full mt-5">
          <div>
            <div className="flex gap-1">
              <IoIosCheckmarkCircle size={20} className="text-gray-300"/>
              <span className="text-gray-500">Free to use</span>
            </div>
            <div className="flex gap-1">
              <MdLocationOn size={20} className="text-gray-300"/>
              <span className="text-gray-500 whitespace-nowrap"> Lizbon, Lisbon, Portek</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="border flex py-2 rounded px-2 w-fit border-gray-400">
              <BsInfoCircleFill size={20} className="text-gray-400"/>

            </div>
            <div className="border flex py-2 px-2 rounded w-fit border-gray-400">
              <MdLaunch size={20} className="text-gray-400"/>
            </div>
          </div>
        </div>

        <div  className="m-3 border-b border-gray-100"/>

        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            { video && 
              <div className={`w-12 h-12 rounded-full border`} style={{backgroundColor: video ? video.avg_color : "red"}}>
                <Image src={video.image} alt={ video.user.name} width={100} height={100} className="w-full h-full object-cover rounded-full"/>
                
              </div>
              

              }

            {video && 
              <h5 className="text-lg text-gray-700">{video.user.name}</h5>
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
          <div className="absolute bg-gradient-to-r w-12 h-16 from-white justify-start items-center" style={{display: startView && !endView ? "none" : !startView && !endView ? "flex" : "flex"}}>
            <MdKeyboardArrowLeft size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideLeft}/>

          </div>

          <div id="sliderBar" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-5 flex gap-2">
            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#" ref={start}>
                Autumn
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Bicycles
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Conversation
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Fall
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Leisure
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Man
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Park
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Recreation
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Relaxation
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Ride
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#" ref={end}>
                Together
              </Link>
            </span>
          </div>
          

          
          <div className="absolute bg-gradient-to-l w-12 h-16 from-white justify-end items-center right-0" style={{display: !startView && endView ? "none" : !startView && !endView ? "flex": "flex"}}>
            <MdKeyboardArrowRight size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideRight}/>

          </div>
        </nav>
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{300: 1, 750: 1, 900: 4}}
          >
            <Masonry >
              <div>
                {video && videos.map((item, i) => { 
                  if (item.id !== video.id) {
                    return (
                      <div key={i} className="relative p-2">
                        <Image src={item.image} alt={ item.user.name} width={item.width} height={item.height} className="w-full h-48 sm:h-full object-cover"/>
                        <FaYoutube size={30} className="absolute top-5 left-5 text-white cursor-pointer hover:text-gray-500"/>
                        <FiDownload size={25} className="absolute bottom-5 right-5 text-white cursor-pointer hover:text-gray-500 sm:hidden"/>

                      </div>
                    )
                }})}
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </div>
        
      </div>

    </div>
  );
}

export default VideoModal;