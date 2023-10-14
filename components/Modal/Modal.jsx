import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const navItems1 = [
  { name: "Home", link: "#" },
  { name: "Discover Photos", link: "#" },
  { name: "Popular Searches", link: "#" },
  { name: "Free Videos", link: "#" },
  { name: "Challenges", link: "#" },
  { name: "Leaderboard", link: "#" },
  { name: "Pexels Blog", link: "#" },
];

const navItems2 = [
  { name: "Login", link: "#" },
  { name: "Join", link: "#" },
  { name: "Change Languge", link: "#" },
  { name: "Licence", link: "#" },
];

const navItems3 = [
  { name: "Apps & Plugins", link: "#" },
  { name: "FAQ", link: "#" },
  { name: "About Us", link: "#" },
  { name: "Imprint & Terms", link: "#" },
];

const socialMediaItems = [
  { name: "Facebook", link: "#", icon: RiFacebookFill },
  { name: "Twitter", link: "#", icon: FaTwitter },
  { name: "Instagram", link: "#", icon: BsInstagram },
  { name: "Pinterest", link: "#", icon: FaPinterestP },
  { name: "Youtube", link: "#", icon: AiOutlineYoutube },
];

const RenderSocialMedia = () => {
  return (
    <div className="flex justify-between items-center mt-7 mx-5 border-b pb-7 border-gray-800">
      {socialMediaItems.map((item, i) => (
        <div
          key={i}
          className="text-white text-xl font-medium cursor-pointer hover:text-gray-500"
        >
          <item.icon className="text-3xl" />
        </div>
      ))}
    </div>
  );
};

const Modal = ({ open }) => {
  return (
    <div
      className="bg-black w-full h-[100vh] fixed top-0 bottom-0 left-0 right-0 overflow-auto"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="w-full border-b h-20 border-gray-800 bg-black fixed" />

      <div className="flex flex-col justify-start items-start gap-5 mt-28 mx-5 border-b pb-10 border-gray-800">
        {navItems1.map((item, i) => (
          <div
            key={i}
            className="text-white text-xl font-medium cursor-pointer hover:text-gray-500"
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-start items-start gap-5 mt-10 mx-5 border-b pb-10 border-gray-800">
        {navItems2.map((item, i) => (
          <div
            key={i}
            className="text-white text-xl font-medium cursor-pointer hover:text-gray-500"
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-start items-start gap-5 mt-10 mx-5 pb-10">
        {navItems3.map((item, i) => (
          <div
            key={i}
            className="text-white text-xl font-medium cursor-pointer hover:text-gray-500"
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="border-t w-full border-gray-800" />

      <RenderSocialMedia />
    </div>
  );
};

export default Modal;
