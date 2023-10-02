import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import ReactLoading from 'react-loading';
import Image from "next/image";


const Photos = ({photos, setInView, handleOpenModal}) => {

  const { ref, inView} = useInView();

  useEffect(() => {    
      setInView(inView)    
  }, [inView])

  return (
    <div className="px-2 absolute -z-20 w-full mt-32">

      <ResponsiveMasonry
        columnsCountBreakPoints={{300: 2, 750: 2, 900: 4}}
        
      >
        <Masonry >
          {photos.map((photo, i) => (
            <div key={i} className="relative z-5 p-2" onClick={() => handleOpenModal(photo)}>
              <Image src={photo.src.medium} alt={photo.photographer} width={100} height={100} className="w-full h-full object-cover"/>
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
  )
}

export default Photos;