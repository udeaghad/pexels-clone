import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import ReactLoading from 'react-loading';
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Videos = ({videos, setInView, handleOpenModal}) => {

  const { ref, inView} = useInView();

  useEffect(() => {    
      setInView(inView)    
  }, [inView])

   return (
    <div className="px-2 absolute -z-20 w-full mt-32">

      <ResponsiveMasonry
        columnsCountBreakPoints={{300: 2, 750: 2, 900: 3}}
        
      >
        <Masonry >
          {videos.map((video, i) => (
            <div key={i} className="relative p-2" onClick={() => handleOpenModal(video)}>
              <Image src={video.image} alt={ video.user.name} width={100} height={100} className="w-full h-full object-cover"/>
              <FaYoutube size={30} className="absolute top-5 left-5 text-white cursor-pointer hover:text-gray-500"/>
              <FiDownload size={25} className="absolute bottom-5 right-5 text-white cursor-pointer hover:text-gray-500"/>

            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry> 
      
      <div ref={ref} className="h-1 bg-white m-5"/>

      <div className="flex justify-center items-center">
        <ReactLoading type="balls" color="gray" height={50} width={50} />
      </div>
    </div>
  );
}

export default Videos;