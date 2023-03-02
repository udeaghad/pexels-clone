import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";

export default function Search(props) {
    const { type, placeholder, inputStyling, icon } = props;
    const [showDropDown, setShowDropDown] = useState(false);
    const inputArea = useRef(null);
    const [searchInpute, setSearchInpute] = useState("");
    const [searchTags, setSearchTags] = useState([]);

    const trendingTopics = [{
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

    const getDropDownDetails = () => {
        setShowDropDown(true);
    };

    const hideDropDownDetails = () => {
        setShowDropDown(false);
    };

    const quickSearch = (e) => {
        setSearchInpute(e.target.value);
        if (searchInpute.length >= 3) {
            // make an axios call to fetch tags based on the  paremeter from the input
            setSearchTags([
                "Fire Works",
                "Understanding purpose",
                "Food Eating",
                "we are outside",
            ]);
        } else {
            setSearchTags([]);
        }
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (inputArea.current && !inputArea.current.contains(e.target)) {
                hideDropDownDetails();
            }
        };

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return ( <div className = "relative w-[90%] h-max" >
        <div ref = { inputArea }
        className = {
            showDropDown ?
            "w-[100%] absolute z-50 shadow-md rounded-b-xl bg-[#ffffff]  " : "w-[100%]  z-50   "
        }

        >
        <div data-testid = "dropdropclick"
        className = {
            showDropDown ?
            "flex flex-row flex-wrap border-2 border-solid border-[#f7f7f7] h-12 w-[100%] rounded-t-md items-center justify-between" : "flex flex-row flex-nowrap border-2 border-solid border-[#f7f7f7] h-12 w-[100%] rounded-md items-center justify-between bg-[#f7f7f7]"
        }
        onClick = {
            () => {
                getDropDownDetails();
            }
        } >
        <div className = " pl-4 ml-4 w-[80%]" >
        <input role = "search-input"
        aria-selected = "true"
        className = {
            showDropDown ? "h-full w-full" : "h-full w-full bg-[#f7f7f7]"
        }
        type = { type }
        placeholder = { placeholder }
        data-testid = "searchforfreephotos"
        inputstyling = { inputStyling }
        defaultValue = { searchInpute }
        onChange = { quickSearch }
        /> </div > {
            icon && ( <div className = {
                    showDropDown == true ?
                    " border-l-2 border-solid border-[#f7f7f7] w-[10%] flex justify-center  items-center h-full" : "w-[10%] flex justify-center  items-center h-full"
                }
                data-testid = "icondisplay" > { icon } </div>
            )
        } </div>

        {
            showDropDown && ( <section data-testid = "dropdown-container"
                className = "border-2 border-solid border-[#f7f7f7] border-t-0 px-4 h-[600px] overflow-y-scroll" > {
                    searchTags.length > 0 && searchInpute.length >= 3 ? ( <section className = "border-b-2 border-solid border-[#f7f7f7] mb-[20px] pb-[20px] pt-[20px]" > {
                            //this section would show a suggestion for the search and when clicked the page would update
                        } {
                            searchTags.map((value) => ( <div key = { value } > { value } </div>
                            ))
                        } </section>
                    ) : null
                } <section >
                <div className = "py-[20px]" >
                <h6 > Trending Topics </h6> </div > <div className = "flex gap-4 flex-wrap" > {
                    trendingTopics.map((trendingTopic) => ( <div key = { trendingTopic.id } >
                        <section >
                        <Tag text = { trendingTopic.text }
                        image = { trendingTopic.image }
                        link = { trendingTopic.link }
                        /> </section > </div>
                    ))
                } </div> </section > </section>
            )
        } </div> </div>
    );
}