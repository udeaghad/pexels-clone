import { IoClose } from "react-icons/io5";
import { BsBookmarks, BsInfoCircleFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";
import { MdLocationOn, MdLaunch, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import Link from "next/link";

const PhotoModal = ({open, photo}) => {

  const { ref: start, inView: startView} = useInView();
  const { ref: end, inView: endView} = useInView();

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 50;
  };



  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 50;
  }

  return (
    <div className=" h-[100vh] fixed top-0 bottom-0 left-0 right-0 overflow-auto z-50" style={{display: open ? "block" : "none"}}>
      <div className="bg-black opacity-90">
        <div className="flex justify-start items-center">
          <IoClose size={40} className="text-white mx-3 cursor-pointer my-2"/>
        </div>
      </div>

      <div className="bg-white p-3 relative">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <div className="border rounded-md p-3 border-gray-300">
              <BsBookmarks size={20} color="gray"/>
            </div>
            <div className="border rounded-md p-3 border-gray-300">
              <BiHeart size={20} color="gray"/>
            </div>
          </div>

          <div className="px-1 flex justify-end items-center border-[#05a081] rounded-md bg-[#05a081] hover:bg-[#04886e] focus:bg-[#04886e] active:bg-[#04886e] gap-2 p-1">
            <div className="text-white text-lg ml-5">
              <span>Free download</span>
            </div>
            <div className="p-2 border-l-2 border-[#04886e] hover:border-[#05a081] focus:border-[#05a081] active:border-[#05a081]">
              <IoIosArrowDown size={20} color="white" />
            </div>
          </div>

        </div>

        <div className="bg-white h-24">
          {/* <Image src={photo.url} alt={photo.alt} width={photo.width} height={photo.height} />  */}
        </div>

        <div className="flex justify-center items-center gap-2 border border-gray-300 mx-3 p-2 rounded-lg">
          <div>
            <Image src="/images/canvas-logo.png" alt="canvass-logo" width={25} height={25} />
          </div>
          <span className="text-lg font-[500]">Edit in Canva</span>

        </div>

        <div className="flex justify-between items-center m-4">
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
            <div className="border flex py-2 px-5 rounded w-fit border-gray-400">
              <BsInfoCircleFill size={20} className="text-gray-400"/>

            </div>
            <div className="border flex py-2 px-5 rounded w-fit border-gray-400">
              <MdLaunch size={20} className="text-gray-400"/>
            </div>
          </div>
        </div>

        <div  className="m-3 border-b border-gray-100"/>

        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            <div className="w-16 h-16 rounded-full border bg-red-300">

            </div>

            <h5 className="text-lg text-gray-700">Efe Ersoy</h5>

          </div>

          <div className="flex gap-3">
            <div className="border rounded-md p-3 border-gray-300 w-fit">
              <AiOutlineUserAdd size={25} className="text-gray-500"/>
            </div>
            <div className="border border-gray-800 bg-gray-800 text-white text-lg px-8 w-fit cursor-pointer rounded-xl flex justify-center items-center">
              <span>Donate</span>
            </div>
          </div>
        </div>

        <div className="mx-5 mt-10 mb-5">
          <h1 className="text-3xl text-gray-800">More like this</h1>
        </div>

        <nav className="relative flex justify-between items-center w-full mt-5 ml-0">
          <div className="absolute bg-gradient-to-r w-12 h-16 from-white justify-start items-center" style={{display: startView && !endView ? "none" : startView && !endView ? "flex" : "flex"}}>
            <MdKeyboardArrowLeft size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideLeft}/>

          </div>

          <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-5 flex gap-2">
            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#" ref={start}>
                35mm
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                35mm Camera
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                35mm Film
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Beautiful
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Botanic Garden
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Film Photo
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Film Photography
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Kodak
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Leisure
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#">
                Lomography
              </Link>
            </span>

            <span className="py-2 px-5 text-lg border rounded-md hover:text-slate-200 hover:bg-black cursor-pointer inline-block border-gray-300">
              <Link href="#" ref={end}>
                Photo grain
              </Link>
            </span>
          </div>
          

          
          <div className="absolute bg-gradient-to-l w-12 h-16 from-white justify-end items-center right-0" style={{display: !startView && endView ? "none" : startView && endView ? "flex": "flex"}}>
            <MdKeyboardArrowRight size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideRight}/>

          </div>
        </nav>
      </div>

    </div>
  )
}

export default PhotoModal