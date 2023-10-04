import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";


const Photos = ({photos, setInView, handleOpenModal}) => {
  useEffect(() => {
    console.log(photos)
  }, [])

  const { ref, inView} = useInView();

    useEffect(() => {    
      setInView(inView)    
  }, [inView])

  const [photoToRender, setPhotoToRender] = useState([])

  useEffect(() => {
    const newPhotoToRender = photos.map(photo => {
      return {
        ...photo,
        showIcons: false
      }
    })

    setPhotoToRender(newPhotoToRender)
  }, [photos])
  
  const hanldeShowIcons = (i) => {
    const newPhotoToRender = photoToRender.map((photo, index) => {
      if (index === i) {
        return {...photo, showIcons: true}
      } else {
        return {...photo, showIcons: false}
      }
    })

    setPhotoToRender(newPhotoToRender)
  }

  const handleDisappearIcon = (i) => {
    const newPhotoToRender = photoToRender.map((photo, index) => {
      if (index === i) {
        return {...photo, showIcons: false}
      } else {
        return {...photo, showIcons: false}
      }
    })

    setPhotoToRender(newPhotoToRender)
  }

  return (
    <div className="px-2 absolute -z-20 w-full mt-32">

      <ResponsiveMasonry
        columnsCountBreakPoints={{300: 2, 900: 3}}
        
      >
        <Masonry >
          
          {photoToRender.length > 0 && photoToRender.map((photo, i) => (
            <div key={i} className="relative z-5 p-2" onClick={() => handleOpenModal(photo)} onMouseEnter={() => hanldeShowIcons(i)} onMouseLeave={() => handleDisappearIcon(i)}>
              <Image src={photo.src.medium} alt={photo.photographer} width={100} height={100} className="w-full h-full object-cover"/>
              <div className="absolute bottom-5 right-5 cursor-pointer text-white font-medium hover:bg-gray-100 hover:opacity-80 p-2 rounded-lg hover:text-black sm:hidden">
                <FiDownload size={20} />
              </div>

              {photo.showIcons && (
                <div className="hidden sm:block">
                  <div className="absolute bottom-5 right-5 cursor-pointer font-medium bg-slate-100 p-3 rounded-lg text-black hover:bg-slate-200">
                    <FiDownload size={20} />
                  </div>

                  <div className="absolute top-5 right-5 flex justify-center items-center gap-1">
                    <div className="cursor-pointer font-medium bg-slate-100 p-3 rounded-lg text-black hover:bg-slate-200">
                      <BsBookmarks size={20} />
                    </div>
                    <div className="cursor-pointer font-medium bg-slate-100 p-3 rounded-lg text-black hover:bg-slate-200">
                      <BiHeart size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 flex justify-center cursor-pointer items-center gap-1">
                    <div className={`w-14 h-14 rounded-full border`} style={{backgroundColor: photo ? photo.avg_color : "gray"}}>
                      <Image src={photo.src.small} alt={photo.photographer} width={100} height={100} className="w-full h-full object-cover rounded-full"/>
                    </div>

                    <h5 className="text-lg text-slate-100 font-medium whitespace-nowrap">{photo.photographer}</h5>

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
  )
}

export default Photos;