import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import ReactLoading from 'react-loading';
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

const Videos = ({videos, setInView, handleOpenModal}) => {

  const { ref, inView} = useInView();

  useEffect(() => {    
      setInView(inView)    
  }, [inView])

 useEffect(() => {
   console.log(videos)
  }, [videos])

  const videoIconRef = useRef();

  const handlePlayVideo = (i) => {
    const video = document.getElementById(`video-${i}`);
    const videoIcon = document.getElementById(`videoIcon-${i}`);
    videoIcon.classList.add("hidden");
    video.play();    
  }

  const HandleStopVideo = (i) => {
    const video = document.getElementById(`video-${i}`);
    const videoIcon = document.getElementById(`videoIcon-${i}`);
    video.pause();
    videoIcon.classList.remove("hidden");
  }

   return (
    <div className="px-2 absolute -z-20 w-full mt-32">

      <ResponsiveMasonry
        columnsCountBreakPoints={{300: 2, 900: 3}}
      >
        <Masonry >
          {videos.map((video, i) => (
            <div key={i} className="relative p-2" onClick={() => handleOpenModal(video)}>
              <div className="mt-5 w-full flex">
                <video 
                  src={video.video_files[0].link} loop type={video.video_files[0].file_type} 
                  className="w-full h-full object-cover" 
                  id={`video-${i}`}
                  onMouseEnter={() => handlePlayVideo(i)}
                  onMouseLeave={() => HandleStopVideo(i)}
                  />
                
              </div>
              <div className="absolute bottom-5 right-5 cursor-pointer text-white font-medium hover:bg-gray-100 hover:opacity-80 p-2 rounded-lg hover:text-black sm:hidden" >
                <FiDownload size={20} />
              </div>
              <div className="absolute top-7 left-5 cursor-pointer text-white font-medium sm:hidden" id={`videoIcon-${i}`}>
                <FaYoutube size={40} />
              </div>

              

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