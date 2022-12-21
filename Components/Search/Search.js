import React, { useState,useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";


export default function Search(props) {
  const { type, placeholder, onFocus, onBlur, inputStyling, icon } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const inputArea = useRef(null)

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

  const getDropDownDetails = () =>{
    setShowDropDown(true)
  }

  const hideDropDownDetails = () =>{
    setShowDropDown(false)
  }
  useEffect( () => { 
    const handleClickOutside = (e) => {
      if(inputArea.current && !inputArea.current.contains(e.target)){
        hideDropDownDetails()
      }
    }
   
    document.addEventListener('click',handleClickOutside,true)
    return () => {
      document.removeEventListener('click',handleClickOutside,true)
    }

  },[])

  return (
    <div ref={inputArea}>
      <div
        style={{
          border: "1px solid #ccc",
          width: "600px",
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "20px",
          height: "50px",
        }}
        
        className="flex"
        onClick={() => {
          getDropDownDetails()
        }}
      >
        <div className="rounded-lg rounded-md pl-4 ml-4 ">
          <input
            style={{ width: "300px" }}
            type={type}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            inputStyling={inputStyling}
          />
        </div>
        <div className="  w-[500px]  border-2 border-solid border-[red]" >
          {/* <div className="h-12 pr-8 ">|</div> */}
          {icon}
        </div>
      </div>

      {showDropDown && (
        <>
          <div>
            <h6>Trending Topics</h6>
          </div>
          <div className="flex gap-4">
            {trendingTopics.map((trendingTopic) => (
              <div key={trendingTopic.id}>
                <Tag
                  text={trendingTopic.text}
                  image={trendingTopic.image}
                  link={trendingTopic.link}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
