import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState  } from "react";
import ReactLoading from 'react-loading';
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";

const Videos = ({videos, setInView, handleOpenModal}) => {

  const { ref, inView} = useInView();

  useEffect(() => {    
      setInView(inView)    
  }, [inView])

  const [videoToRender, setVideoToRender] = useState([])

  useEffect(() => {
    
    const newVideoToRender = videos.map(video => {
      return {
        ...video,
        showIcons: false
      }
    })

    setVideoToRender(newVideoToRender)
  }, [videos])

  const handlePlayVideo = (i) => {
    const newVideoToRender = videoToRender.map((video, index) => {
      if (index === i) {
        return {...video, showIcons: true}
      } else {
        return {...video, showIcons: false}
      }
    })

    setVideoToRender(newVideoToRender)

    const video = document.getElementById(`video-${i}`);
    const videoIcon = document.getElementById(`videoIcon-${i}`);
    videoIcon.classList.add("hidden");
    video.play(); 

  }

  const HandleStopVideo = (i) => {
    const newVideoToRender = videoToRender.map((video, index) => {
      if (index === i) {
        return {...video, showIcons: false}
      } else {
        return {...video, showIcons: false}
      }
    })

    setVideoToRender(newVideoToRender)

    const video = document.getElementById(`video-${i}`);
    const videoIcon = document.getElementById(`videoIcon-${i}`);    
    video.pause();
    videoIcon.classList.remove("hidden");
  }

   return (
    <div className="px-5 absolute -z-20 w-full mt-16">

      <ResponsiveMasonry
        columnsCountBreakPoints={{300: 2, 900: 3}}
      >
        <Masonry >
          {videoToRender.map((video, i) => (
            <div key={i} className="relative p-2" onClick={() => handleOpenModal(video)} onMouseEnter={() => handlePlayVideo(i)}
            onMouseLeave={() => HandleStopVideo(i)}>
              <div className="mt-5 w-full flex">
                <video 
                  src={video.video_files[0].link} loop type={video.video_files[0].file_type} 
                  className="w-full h-full object-cover" 
                  id={`video-${i}`}                  
                  />
                
              </div>
              <div className="absolute bottom-5 right-5 cursor-pointer text-white font-medium hover:bg-gray-100 hover:opacity-80 p-2 rounded-lg hover:text-black sm:hidden" >
                <FiDownload size={30} />
              </div>
              <div className="absolute top-10 left-5 cursor-pointer text-white font-medium" id={`videoIcon-${i}`}>
                <FaYoutube size={30} />
              </div>

              {video.showIcons && (
                <div className="hidden sm:block">
                  <div className="absolute bottom-5 right-5 cursor-pointer text-white font-medium hover:bg-gray-100 hover:opacity-80 p-2 rounded-lg hover:text-black">
                    <FiDownload size={30} />
                  </div>

                  <div className="absolute top-10 right-5 flex justify-center items-center gap-1">
                    <div className="cursor-pointer font-medium bg-slate-100 p-3 rounded-lg text-black hover:bg-slate-200">
                      <BsBookmarks size={20} />
                    </div>
                    <div className="cursor-pointer font-medium bg-slate-100 p-3 rounded-lg text-black hover:bg-slate-200">
                      <BiHeart size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 flex justify-center items-center gap-1 cursor-pointer">
                    <div className={`w-14 h-14 rounded-full border`} style={{backgroundColor: video ? video.avg_color : "gray"}}>
                      <Image src={video.image} alt={video.user.name} width={100} height={100} className="w-full h-full object-cover rounded-full"/>
                    </div>

                    <h5 className="text-lg text-slate-100 font-medium whitespace-nowrap">{video.user.name}</h5>

                  </div>
                </div>
              )}

              

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