import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";

export default function Search(props) {
  const { type, placeholder, onFocus, onBlur, inputStyling, icon } = props;
  const [showDropDown, setShowDropDown] = useState(false);

  const trendingTopics = [
    {
      id: 1,
      image: "/dollar.jpeg",
      text: "Money",
      link: "/",
    },
    {
      id: 2,
      image: "/House.jpeg",
      text: "House",
      link: "/",
    },
    {
      id: 3,
      image: "/Car.jpeg",
      text: "Car",
      link: "/",
    },
    {
      id: 4,
      image: "/flower.jpeg",
      text: "Flower",
      link: "/",
    },
    {
      id: 5,
      image: "/nature.jpeg",
      text: "Nature",
      link: "/",
    },
    {
      id: 6,
      image: "/landscape.jpeg",
      text: "landscape",
      link: "/",
    },
    {
      id: 7,
      image: "/darkness.jpeg",
      text: "dark",
      link: "/",
    },
    {
      id: 8,
      image: "/christmas.jpeg",
      text: "christmas tree",
      link: "/",
    },
    {
      id: 9,
      image: "/food.jpeg",
      text: "food",
      link: "/",
    },
    {
      id: 10,
      image: "/sky.jpeg",
      text: "sky",
      link: "/",
    },
  ];

  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          width: "600px",
          borderRadius: "10px",
          alignItems: "center",
        }}
        className="flex"
        onClick={() => {
          setShowDropDown(true);
        }}
      >
        <div className="rounded-lg w-2/5 rounded-md pl-4 ml-4">
          <input
            type={type}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            inputStyling={inputStyling}
            className="h-12"
          />
        </div>
        <div>{icon}</div>
      </div>

      {showDropDown && (
        <>
          <div>
            <h6>Trending Topics</h6>
          </div>
          <div className="flex gap-4">
            {trendingTopics.map((trendingTopic) => (
              <div key={trendingTopic.id}>
                <Dropdown
                  text={trendingTopic.text}
                  image={trendingTopic.image}
                  link={trendingTopic.link}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
