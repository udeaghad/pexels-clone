import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";

const Photos = ({photos}) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{300: 2, 750: 3, 900: 4}}
    >
      <Masonry>
        {photos.map((photo, i) => (
          <div key={i} className="relative z-5 p-2">
            <img src={photo.src.medium} alt={photo.photographer} className="w-full h-full object-cover"/>
            <FiDownload size={25} className="absolute bottom-5 right-5 text-white cursor-pointer hover:text-gray-500"/>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry> 
  )
}

export default Photos;