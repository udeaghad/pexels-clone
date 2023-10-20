import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ContributorPhotos = () => {
  const images = [
    {
      photo:
        "https://images.pexels.com/photos/5415710/pexels-photo-5415710.jpeg?auto=compress&cs=tinysrgb&w=785&dpr=1&h=1050&fit=fill",
      name: "Photo by Anna Shvets",
    },
    {
      photo:
        "https://images.pexels.com/photos/15444517/pexels-photo-15444517/free-photo-of-railing-behind-raindrops-on-window.jpeg?auto=compress&cs=tinysrgb&w=785&dpr=1&h=1050&fit=fill",
      name: "Photographed by Alex Fu",
    },
    {
      photo:
        "https://images.pexels.com/photos/3612340/pexels-photo-3612340.jpeg?auto=compress&cs=tinysrgb&w=785&dpr=1&h=1050&fit=fill",
      name: "Photographed by Darius Krause",
    },
    {
      photo:
        "https://images.pexels.com/photos/16307207/pexels-photo-16307207/free-photo-of-black-white-film-woman-s-portrait.jpeg?auto=compress&cs=tinysrgb&w=785&dpr=1&h=1050&fit=fill",
      name: "Photographed by Nadine Wuchenauer",
    },
    {
      photo:
        "https://images.pexels.com/photos/18537442/pexels-photo-18537442/free-photo-of-sailboat-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=785&dpr=1&h=1050&fit=fill",
      name: "Photographed by Created Stories",
    },
    {
      photo:
        "https://images.pexels.com/photos/15168538/pexels-photo-15168538/free-photo-of-white-swan-swimming-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=785&dpr=1&h=1050&fit=fill",
      name: "Photographed by Pixabay",
    },
    {
      photo:
        "https://images.pexels.com/photos/18651379/pexels-photo-18651379/free-photo-of-the-pyramids.jpeg?auto=compress&cs=tinysrgb&w=785&dpr=1&h=1050&fit=fill",
      name: "Photographed by Justin Wolfert",
    },
  ];
  return (
    <div className="relative">
      <div className="px-4">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.photo}
                alt="hero"
                width={785}
                height={1050}
                className="w-full h-72 rounded-2xl object-cover lg:h-[600px]"
              />
              <p className="absolute bottom-3 font-medium text-white right-7">
                {image.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContributorPhotos;
