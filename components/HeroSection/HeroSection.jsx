"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import Navbar from "../NavBar/NavBar";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import IntersectionNavBar from "../IntersectionNavBar/IntersectionNavBar";
import Image from "next/image";

const HeroSection = ({ open, setOpen }) => {
  const router = useRouter();

  const { ref, inView } = useInView({
    initialInView: true,
  });

  return (
    <div>
      <div className="relative w-full z-5">
        <Image
          src="https://images.pexels.com/photos/17928278/pexels-photo-17928278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1500" width={500} height={500}
          alt="background-img"
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
                The best free stock photos, royal free images & videos shared by
                creators.
              </p>
            </div>

            <div className="md:flex justify-center items-center">
              <div className="bg-white flex justify-start items-center rounded-md px-2 py-1 gap-1 mx-5 sm:w-[85%] lg:w-[70%] xl:w-[50%] lg:justify-center">
                <div className="flex justify-center items-center bg-gray-100 rounded-md border border-gray-400 p-1 sm:gap-1">
                  <BiImageAlt size={30} className="text-gray-500" />
                  <span className="">Photos</span>
                  <MdOutlineKeyboardArrowDown
                    size={20}
                    className=" text-gray-500"
                  />
                </div>
                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="Search for free photos"
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

            <div className="lg:flex items-center justify-center">
              <div className="flex justify-start items-center text-base text-white font-bold my-5 gap-1 mx-[8%] lg:w-[70%] xl:w-[50%]">
                <span className="text-slate-300">Trending:</span>
                <span className="text-white whitespace-nowrap overflow-hidden">
                  smoke, time, team, pattern, data{" "}
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

          <div className="text-lg text-slate-200 font-medium text-right mx-5 absolute bottom-1 right-1 -z-10">
            <span className="text-gray-400">Photo by </span>
            <span>Dang vu hai</span>
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

export default HeroSection;
