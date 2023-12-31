"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const navItems = [
    { name: "Home", link: "/", start: true, end: false },
    { name: "Videos", link: "/videos", start: false, end: false },
    { name: "Leaderboard", link: "#", start: false, end: false },
    { name: "Challenges", link: "#", start: false, end: true },
  ];

  const pathName = usePathname();

  const { ref: start, inView: startView } = useInView();
  const { ref: end, inView: endView } = useInView();

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 50;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 50;
  };

  return (
    <nav className="relative flex justify-between items-center w-full mt-5 md:mt-8">
      <div className="flex justify-start items-center sm:hidden">
        <div
          className="absolute bg-gradient-to-r w-12 h-16 from-white justify-start items-center"
          style={{
            display:
              startView && !endView
                ? "none"
                : !startView && !endView
                ? "flex"
                : "flex",
          }}
        >
          <MdKeyboardArrowLeft
            size={30}
            className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten"
            onClick={slideLeft}
          />
        </div>
      </div>

      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-5 flex justify-center items-center gap-5 pl-32 md:p-0"
      >
        <div ref={start} />
        {navItems.map((item, i) => (
          <div
            key={i}
            className={`text-base inline-block rounded-full cursor-pointer font-medium ${
              pathName === item.link
                ? "bg-black text-white hover:text-white hover:bg-gray-800 py-3 px-5 "
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() =>
              router.push(
                item.link,
                undefined,
                { shallow: true },
                { scroll: false }
              )
            }
          >
            {item.name}
          </div>
        ))}

        <div ref={end} />
      </div>

      <div className="flex justify-start items-center sm:hidden">
        <div
          className="absolute bg-gradient-to-l w-12 h-16 from-white justify-end items-center right-0"
          style={{
            display:
              !startView && endView
                ? "none"
                : !startView && !endView
                ? "flex"
                : "flex",
          }}
        >
          <MdKeyboardArrowRight
            size={30}
            className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten"
            onClick={slideRight}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
