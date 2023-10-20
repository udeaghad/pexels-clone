import { FcCheckmark } from "react-icons/fc";
import { IoMdCheckmark } from "react-icons/io";

const ContributorList = () => {
  return (
    <ul className="mt-10 mx-3 lg:mt-5">
      <li className="flex justify-start items-start gap-2 font-bold text-[18px] lg:text-[15px] text-gray-500 mb-3 lg:mb-2">
        <IoMdCheckmark className="text-2xl mt-1 text-[#05a081] sm:text-3xl lg:text-2xl" />
        <span>
          Reach a global audience of more than{" "}
          <span className="text-gray-800 whitespace-nowrap">30 million</span>
        </span>
      </li>
      <li className="flex justify-start items-start gap-2 font-bold text-[18px] lg:text-[15px] text-gray-500 mb-3 lg:mb-2">
        <IoMdCheckmark className="text-3xl mt-1 text-[#05a081] lg:text-2xl" />
        <span>
          <span className="text-gray-800">
            Help creative people all over the world
          </span>{" "}
          <span className="whitespace-nowrap">bring their ideas to life</span>
        </span>
      </li>

      <li className="flex justify-start items-start gap-2 font-bold text-[18px] lg:text-[15px] text-gray-500 mb-3 lg:mb-2">
        <IoMdCheckmark className="text-3xl mt-1 text-[#05a081] lg:text-2xl" />
        <span>
          <span>Join more than 320K</span>{" "}
          <span className="whitespace-nowrap text-gray-800">incredibly talented photographers</span>
        </span>
      </li>
    </ul>
  );
};

export default ContributorList;
