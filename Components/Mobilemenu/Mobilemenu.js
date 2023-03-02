import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";
import { FaList } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";
import Logo from "../Logo/Logo";
import { IoSearchOutline } from "react-icons/io5";
import Profilemenu from "../Profilemenu/Profilemenu";

export default  function Mobilemenu (props) {
  const [showDropDown, setShowDropDown] = useState(false);
  const { isLoggedIn } = props;
  const showDropDownOnClick = () => {
    setShowDropDown(true);
  };
  const hideDropDownOnClick = () => {
    setShowDropDown(false);
  };
  return (
    <div className="relative">
      <div>
        <FaList
          role="menuicon"
          onClick={() => {
            showDropDownOnClick();
          }}
          className="text-[18px]"
        />
      </div>
      {showDropDown ? (
        <div
          role="menudropdown"
          className={
            showDropDown
              ? "w-[100%] absolute z-50 shadow-md  bg-[#000] h-screen top-0 min-h-[200px] "
              : "w-[100%] absolute z-50 top-0 h-screen  "
          }
        >
          <div className="border-b-[1px] border-b-[#ccc] p-[20px] grid grid-cols-10 gap-4 content-center">
            <div className="col-span-2 sm:col-span-2 md:col-span-2">
                <Logo
                width="80"
                height="80"
                image="/christmas.png"
                alt="logo"
                link="/"
                mobileImage="/christmas.png"
                 />
            </div>
            <div className="flex items-center col-span-5 sm:col-span-6 md:col-span-6">
                <Search
                type="text"
                placeholder="Search for free photos"
                inputstyling="text-slate-600 border-none "
                icon={<IoSearchOutline />}
                /> 
            </div>
            <div className="flex flex-wrap justify-end col-span-3 sm:col-span-2 md:col-span-2">
              {isLoggedIn ? <div>
                <Notification 
                    textcolor="#fff" 
                    tooltiptext="this is just a tooltip text"
                    />
              </div> : null}

              {isLoggedIn ? <div><Profilemenu textcolor="#fff" /> </div> : null}

              <div>
                <AiOutlineClose
                  role="close"
                  className="text-[#fff] text-[30px]"
                  onClick={() => {
                    hideDropDownOnClick();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


