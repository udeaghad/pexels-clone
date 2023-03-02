import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "rsuite";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

/**
 * Represents the menu dropdown container.
 * @function
 * @param {string} props - stores the value of the dropped down list.
 * @Description - this component works dynamically, it is both used to generate the hidden
 * dropdown list both of "Explore" and
 * "Profile" on the menu
 */

export default function MenuDropdown(props) {
  const [menuitem, setMenuitem] = useState([]);
  const {textColor} = props;

  /**
   * This represents the function which is call first, usually called inside of the useeffct hook
   * @function
   * @returns {void}
   */
  const bootstrap = () => {
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
    setMenuitem(menuList);
  };

  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props} renderToggle={renderButton} className="rounded-2xl">
      <div className="min-w-[200px] " role="popupmenu">
        <div>
          {menuitem.map((value) => (
            <Dropdown.Item
              className="flex justify-center  p-[0] mb-[10px] pt-[8px] pb-[8px] hover:bg-slate-100 hover:text-[#000] w-[100%]"
              key={value.id}
              role="region"
              aria-label="menu details"
            >
              <li className="" key={value.id}>
                <Link href={value.cta}>{value.title}</Link>
              </li>
            </Dropdown.Item>
          ))}
        </div>
      </div>
    </Dropdown>
  );

  const renderButton = (props, ref) => {
    return (
      <div {...props} ref={ref} className="w-[30px]">
        <button className={!textColor ?" text-[16px] text-[#fff]": textColor+" text-[16px]"}>Explore</button>
      </div>
    );
  };
  useEffect(() => {
    bootstrap();
  }, []);

  return (
    //data test id is the id used to get a elements passed as arguments to the test files
    <CustomDropdown trigger="hover" role="hoverbutton" />
  );
}

{
  /* <div
className="bg-white w-48 h-[auto] rounded-[20px] py-5 leading-9 font-medium"
data-testid="dropdown-list"
>
<ul style={{ listStyle: "none" }}>
  {menuitem.map((items, keys) => (
    <li className="hover:bg-slate-100 pl-6" key={items.id}>
      <Link href={items.cta}>{items.title}</Link>
    </li>
  ))}
</ul>
</div> */
}
