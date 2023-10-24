import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FiDownload } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { BiHeart } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import useLazyLoadImages from "../../hooks/lazyloadImages";
import Image from "next/image";

const Photos = ({ photos, setInView, handleOpenModal }) => {
  const { ref, inView } = useInView();

  const loadImages = useLazyLoadImages();

  useEffect(() => {
    loadImages();
  });

  useEffect(() => {
    setInView(inView);
  }, [inView, setInView]);

  const [photoToRender, setPhotoToRender] = useState([]);

  useEffect(() => {
    const newPhotoToRender = photos.map((photo) => {
      return {
        ...photo,
        showIcons: false,
      };
    });

    setPhotoToRender(newPhotoToRender);
  }, [photos]);

  const hanldeShowIcons = (i) => {
    const newPhotoToRender = photoToRender.map((photo, index) => {
      if (index === i) {
        return { ...photo, showIcons: true };
      } else {
        return { ...photo, showIcons: false };
      }
    });

    setPhotoToRender(newPhotoToRender);
  };

  const handleDisappearIcon = (i) => {
    const newPhotoToRender = photoToRender.map((photo, index) => {
      if (index === i) {
        return { ...photo, showIcons: false };
      } else {
        return { ...photo, showIcons: false };
      }
    });

    setPhotoToRender(newPhotoToRender);
  };

  return (
    <div className="px-5 absolute -z-20 w-full mt-16">
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 900: 3 }}>
        <Masonry>
          {photoToRender.length > 0 &&
            photoToRender.map((photo, i) => (
              <div
                key={i}
                className="relative z-5 p-2 cursor-pointer"
                onClick={() => handleOpenModal(photo)}
                onMouseEnter={() => hanldeShowIcons(i)}
                onMouseLeave={() => handleDisappearIcon(i)}
              >
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={""}
                    alt={photo.photographer}
                    width={photo.width}
                    height={photo.height}
                    className="w-full h-full object-cover lazyload"
                    data-src={photo.src.original}
                    loading="eager"
                  />
                }
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
                      <div
                        className={`w-14 h-14 rounded-full border`}
                        style={{
                          backgroundColor: photo ? photo.avg_color : "gray",
                        }}
                      >
                        {
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={""}
                            alt={photo.photographer}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover rounded-full lazyload"
                            data-src={photo.src.small}
                            loading="eager"
                          />
                        }
                      </div>

                      <h5 className="text-lg text-slate-100 font-medium whitespace-nowrap">
                        {photo.photographer}
                      </h5>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </Masonry>
      </ResponsiveMasonry>

      {photos.length > 0 && (
        <div className="flex justify-center items-center" ref={ref}>
          <ReactLoading type="balls" color="gray" height={50} width={50} />
        </div>
      )}
    </div>
  );
};

export default Photos;
