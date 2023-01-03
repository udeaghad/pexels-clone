import React from "react";
import Image from "next/image";
import Dropdown from "../../../Components/Dropdown/Dropdown";

export default function TrendingTopicsDropdown() {
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
    
  ];
  console.log(trendingTopics);

  return (
    <div>
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
    </div>
  );
}
