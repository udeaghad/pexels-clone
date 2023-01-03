import Link from "next/link";
import React from "react";

/**
 * Represents the button container.
 * @function
 * @param {string} props - stores the values to be called to build up a button.
 * @Description - this component works dynamically, it is used to build all
 * the buttons used on this project.
 * if the variant you want already exist, then pass the name of the variant to the
 * varint prop on the render page. you can leave the variant empty and it will
 * automatically call a default button. however if the button you want is niether
 * the variant or the default button, you can design a unique button by just passing CSS
 * styling properties to customstyle. if the the button has an icon, then import the icon from react-icons
 * library and pass it as a value to the icon props.
 * view the button page to see how it is rendered.
 */

export default function Btn(props) {
  const { cta, variant, icon, value, customstyle } = props;

  const style = () => {
    if (customstyle.length > 0) {
      return `${customstyle}`;
    }

    if (variant === "longNormal") {
      return `bg-[#05a081] text-[#fff] w-[160px] flex items-center justify-center 
            rounded-md h-[50px]  font-medium text-base`;
    }

    return `bg-[#05a081] text-[#fff] w-[110px] flex items-center justify-center 
            rounded-md h-[50px] font-medium text-base`;
  };

  return (
    <button className={style()} onClick={cta}>
      {icon ? <>{icon}</> : null}
      {value}
    </button>
  );
}
