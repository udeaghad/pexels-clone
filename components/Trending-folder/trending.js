import Link from "next/link";
import React from "react";
import { CiCircleMore } from "react-icons/ci";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
/**
 * Represents the trending topics container.
 * @function
 * @param {string} props - stores the value of the trending topic list.
 * @Description - this component fetches and displays five top trending topics
 * on the hero section of the home page
 */

export default function Trending(props) {
  const { TrendingTags, Trendings, more } = props;
  return (
    //data test id is the id used to get a elements passed as arguments to the test files
    <div
      className="h-[auto] border-solid border-2 border-indigo-600 items-center font-normal
         flex sm:w-[500px] lg:w-[700px] sm:truncate lg:truncate"
      data-testid="trending-topics"
    >
      <div className="text-zinc-500">{Trendings}</div>
      <div>
        <ul style={{ listStyle: "none" }} className="flex pl-[6px]">
          {TrendingTags.map((items, keys) => (
            <li
              className="hover:text-zinc-500 text-white pr-[5px]"
              key={items.id}
            >
              <Link href={items.cta}>{items.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <IconContext.Provider
          value={{
            className: "border-none text-slate-100 text-3xl fill-white",
          }}
        >
          <Link href={more}>
            <CiCircleMore />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
}
