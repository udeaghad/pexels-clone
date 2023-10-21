import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ShareContent = () => {

  return (

    <div className="lg:flex justify-center items-center">

      <div 
        className="border-2 border-dashed rounded-[2rem] mx-4 mt-14 flex flex-col justify-center items-center gap-5 pb-20 pt-5 mb-10 relative lg:w-[85%]"
      >
        <div className="absolute top-5 right-5 text-gray-300 font-medium text-sm">
          <span>(0/10)</span>
        </div>
        <div>
          <Image src="/images/image-icon.png" width={250} height={150} />
        </div>

        <h3 className="text-[33px] font-bold text-gray-800 text-center leading-tight lg:hidden">Share your<br/>content</h3>
        <h3 className="hidden text-[33px] font-bold text-gray-800 text-center leading-tight lg:block">Drag and drop<br/>to upload, or</h3>
        
        <div className="text-white border rounded-md py-2 sm:py-3 px-7 font-semibold font-white bg-[#05a081] hover:bg-[#059377]">
          <span>Browse</span>
        </div>

        <div className="sm:mt-10">
          <p className="font-semibold text-gray-800">(<span>You have</span>{" "}<span className="text-[#05a081]">10 uploads</span>{" "}<span>left for the day</span>)</p>
        </div>

        <ul className="flex flex-col justify-center mt-8 px-1 lg:px-10 mb-16 relative z-20 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          
          <li className="flex justify-start items-center p-3">
            <IoIosCheckmarkCircle className="inline-block text-[#05a081]" />
            <span className="text-[14px] font-semibold text-gray-700 ml-2">
              <span className="text-gray-900">Original</span>{" "}content you captured
            </span>
          </li>

          <li className="flex justify-start items-center p-3">
            <IoIosCheckmarkCircle className="inline-block text-[#05a081]" />
            <span className="text-[14px] font-semibold text-gray-700 ml-2">
              <span className="text-gray-900">Mindful of the rights of others</span>
            </span>
          </li>

          <li className="flex justify-start items-center p-3">
            <IoIosCheckmarkCircle className="inline-block text-[#05a081]" />
            <span className="text-[14px] font-semibold text-gray-700 ml-2">
              <span className="text-gray-900">High quality</span>{" "}photos and videos
            </span>
          </li>

          <li className="flex justify-start items-center p-3">
            <IoIosCheckmarkCircle className="inline-block text-[#05a081]" />
            <span className="text-[14px] font-semibold text-gray-700 ml-2">
              <span className="text-gray-900">Excludes</span>{" "}graphic nudity, violence, or hate
            </span>
          </li>

          <li className="flex justify-start items-center p-3">
            <IoIosCheckmarkCircle className="inline-block text-[#05a081]" />
            <span className="text-[14px] font-semibold text-gray-900 ml-2">
              <span className="text-gray-700">To be downloaded and</span>{" "}<span className="whitespace-nowrap">used for free</span>
            </span>
          </li>

          <li className="flex justify-start items-center p-3">
            <IoIosCheckmarkCircle className="inline-block text-[#05a081]" />
            <span className="text-[14px] font-semibold text-gray-700 ml-2">
              <span className="text-gray-700">Read the <span className="underline decoration-dashed decoration-1">Pexels Terms</span></span>
            </span>
          </li>
        </ul>

        <div className="absolute -bottom-3 -left-3 -right-3 flex justify-center items-center h-96 bg-gradient-to-t from-white">
          <div className="border rounded-md py-2 sm:py-3 px-8 text-gray-500 font-semibold mb-20 mt-72">
            <span>Skip upload</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ShareContent