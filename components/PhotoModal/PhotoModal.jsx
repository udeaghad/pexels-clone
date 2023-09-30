import { IoClose } from "react-icons/io5";
import { BsBookmarks, BsInfoCircleFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";
import { MdLocationOn, MdLaunch } from "react-icons/md";
import Image from "next/image";

const PhotoModal = ({open, photo}) => {
  return (
    <div className="w-full h-[100vh] fixed top-0 bottom-0 left-0 right-0 overflow-auto z-50" style={{display: open ? "block" : "none"}}>
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
      </div>

    </div>
  )
}

export default PhotoModal