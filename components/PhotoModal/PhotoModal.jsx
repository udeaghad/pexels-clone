import { IoClose } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const PhotoModal = ({open}) => {
  return (
    <div className="w-full h-[100vh] fixed top-0 bottom-0 left-0 right-0 overflow-auto z-50" style={{display: open ? "block" : "none"}}>
     <div className="bg-black opacity-90">
        <div className="flex justify-start items-center">
          <IoClose size={40} className="text-white mx-3 cursor-pointer my-2"/>
        </div>


        </div>

        <div className="bg-white p-3">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <div className="border rounded-md p-3">
                <BsBookmarks size={20} color="gray"/>
              </div>
              <div className="border rounded-md p-3">
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

     </div>
    </div>
  )
}

export default PhotoModal