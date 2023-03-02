import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import * as Icons from "react-icons/fa";
import React from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "rsuite";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { jsx } from "@emotion/react";

/**
 * Profilemenu is a component used to handle all relevant links for when a user is loggedin.
 * @function
 * @param {object}  props - stores the value of menu icon color.
 * @return {jsx}
 */
export default function Profilemenu(props) {
  const { textcolor } = props;
  const [profileMenu, setProfileMenu] = useState([]);
  const [socialIcons, setSocialIcons] = useState([]);

  /**
   * bootstrap is a function which would be triggered once a user enters the component,
   * this would run relevant axios call to fetch the profile links.
   * @function
   * @return {void}
   */
  const bootstrap = () => {
    // todo use axios to fetch notificationfrom the server and save on the state
    let menuList = [
      {
        id: "1",
        title: "Discorver Photos",
        cta: "/",
      },
      {
        id: "2",
        title: "Popular Searches",
        cta: "/",
      },

      {
        id: "3",
        title: "Leaderboard",
        cta: "/",
      },

      {
        id: "4",
        title: "Challenges",
        cta: "/",
      },
      {
        id: "5",
        title: "Free Videos",
        cta: "/",
      },
      {
        id: "6",
        title: "Pexel Blog",
        cta: "/",
      },
    ];
    let socialIcons = [
      {
        id: "1",
        icon: "FaFacebookF",
        link: "/",
      },
      {
        id: "2",
        icon: "FaTwitter",
        link: "/",
      },

      {
        id: "3",
        icon: "FaInstagram",
        link: "/",
      },

      {
        id: "4",
        icon: "FaPinterestP",
        link: "/",
      },
      {
        id: "5",
        icon: "FaYoutube",
        link: "/",
      },
    ];
    setSocialIcons(socialIcons);
    setProfileMenu(menuList);
  };

  /**
   * CustomFaIcon is a functon used to handle the convertion of menu icons from string to jsx.
   * @function
   * @param {object}  name - stores the value of menu icon color.
   * @return {jsx}
   */
  const CustomFaIcon = ({ name }) => {
    const FaIcon = Icons[name];
    if (!FaIcon) return <p>Icon not found!</p>;

    return <FaIcon className="text-[17px]" />;
  };

  useEffect(() => {
    bootstrap();
  }, []);


  /**
   * CustomDropdown is a functon used to display the profile menu in a dropdown.
   * @function
   * @param {object}  props - stors (Dropdown) original props, and can be manipulated too to suite users needs.
   * @return {jsx}
   */
  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props} renderToggle={renderButton} className="rounded-2xl">
      <div className=" min-w-[250px]" role="popupmenu">
        <div>
          {profileMenu.map((value) => (
            <Link
              className="no-underline hover:no-underline hover:text-[#000] visited:text-[#000]"
              href={value.cta}
            >
              <Dropdown.Item
                className="px-[20px] py-[8px] text-[#000] p-[0] mb-[5px] hover:bg-[#eee] hover:text-[#000]"
                key={value.id}
                role="region"
                aria-label="profilemenu details"
              >
                <div className=" ">{value.title}</div>
              </Dropdown.Item>
            </Link>
          ))}

          {/** user profile dropdown footer */}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 px-[30px] pt-[10px] content-center border-t-[1px] border-t-[#eee] h-[50px] ">
        {socialIcons.map((value) => (
          <div key={value.id}>
            <Link href="/" className="hover:text-[#000] visited:text-[#000]">
              <CustomFaIcon name={value.icon} />
            </Link>
          </div>
        ))}
      </div>
    </Dropdown>
  );

  const renderButton = (props, ref) => {
    return (
      <div {...props} ref={ref} className="w-[30px]">
        <FaUserCircle className={`text-[25px] text-[${textcolor}]`} />
      </div>
    );
  };

  return (
    <CustomDropdown
      trigger="hover"
      role="hoverbutton"
      placement={"bottomEnd"}
    />
  );
}
