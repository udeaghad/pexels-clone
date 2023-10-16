"use client";

import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import Modal from "../Modal/Modal";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import Navbar from "../NavBar/NavBar";
import { useInView } from "react-intersection-observer";
import { RiVideoLine } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import IntersectionNavBar from "../IntersectionNavBar/IntersectionNavBar";
import { useRouter } from "next/router";

const VideoHeroSection = ({open, setOpen}) => {
  const router = useRouter();

  const { ref, inView } = useInView({
    initialInView: true,
  });

  return (
    <div>
      <div className="relative w-full z-5">
        <video
          src="https://static.pexels.com/lib/videos/free-videos.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop
          className="absolute w-full h-full top-0 left-0 object-cover brightness-50 -z-10"
        />
        <div
          ref={ref}
          className="w-full top-0 flex justify-center flex-col h-screen"
          style={{ position: open ? "fixed" : "relative" }}
        >
          
          <div className="md:flex flex-col justify-center">
            <div className="p-5 md:flex justify-center items-center w-full sm:px-0">
              <p className="text-white text-4xl font-medium sm:w-[85%] lg:w-[70%] xl:w-[50%]">
                The best free stock videos shared by the Pexels community.
              </p>
            </div>

            <div className="md:flex justify-center items-center">
              <div className="bg-white flex justify-start items-center rounded-md px-2 py-1 gap-1 mx-5 sm:w-[85%] lg:w-[70%] xl:w-[50%] lg:justify-center">
                <div className="flex justify-center items-center bg-gray-100 rounded-md border border-gray-400 p-1 sm:gap-1">
                  <RiVideoLine size={30} className="text-gray-500" />
                  <span className="hidden sm:block">Videos</span>
                  <MdOutlineKeyboardArrowDown
                    size={20}
                    className=" text-gray-500"
                  />
                </div>
                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="Search for free videos"
                    className="px-2 py-1 text-lg font-medium outline-none w-full"
                  />
                </div>
                <div>
                  <HiOutlineSearch
                    size={25}
                    className="text-gray-400 text-end"
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex justify-start items-center lg:justify-center">
              <div className="flex justify-start items-center text-base text-white font-bold my-5 gap-1 mx-[8%] lg:w-[70%] xl:w-[50%]">
                <span className="text-slate-300">Trending:</span>
                <span className="text-white whitespace-nowrap overflow-hidden">
                  gandhi jayanti, october, mahatma gandhi, batik, natural{" "}
                </span>
                <HiDotsCircleHorizontal
                  size={30}
                  className="text-gray-300 cursor-pointer hover:text-gray-500"
                  onClick={() =>
                    router.push("/popular-searches", undefined, {
                      shallow: true,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end gap-1 text-lg text-slate-200 font-medium text-right mx-5 absolute bottom-1 right-1 cursor-pointer -z-10">
            <SiCanva size={30} className="inline-block text-slate-200" />
            <span className="text-base">Click here for Canva video</span>
          </div>
        </div>

        <div
          style={{
            display: inView ? "none" : "block",
            top: 0,
            position: "fixed",
          }}
          className="z-50 w-full"
        >
          <IntersectionNavBar setOpen={setOpen} open={open} />
        </div>
      </div>

      <div style={{ display: open ? "none" : "block" }}>
        <Navbar />
      </div>
    </div>
  );
};

export default VideoHeroSection;
