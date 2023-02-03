import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";


/**
 * Tabmenu is a component used to manage the tab menu which aids in navigating to different pages.
 * @function
 * @param {object}  props - stores the value of the tab menu list.
 * @todo expext to check if the tab are mobile phone friendly.
 * @return {HTMLElement} 
 */
export default function Tabmenu(props) {
    const { tablist, link,currentRoute } = props;
    const [showTabMenu, setTabMenu] = useState();
    const [newroute, setNewroute] = useState(Router);

    const setRoute = (route) => {
        newroute.push(route);
    };

    return (
         <div data-testid = "tabmenutext">
        <ul className = "flex flex-row gap-4 text-slate-600" > 
        {
            tablist.map((tabbar, index) => ( 
                <div  className={currentRoute == tabbar.link ? "bg-black  text-white h-[48px] flex justify-center items-center p-4 rounded-3xl cursor-pointer text-[16px] px-px-[20px] py-px-[0px]" : "h-12 flex justify-center items-center p-4 rounded-3xl cursor-pointer"}
                key = { tabbar.id }
                onClick = {
                    () => {
                        setRoute(tabbar.link);
                        
                    }
                } >
                <div  className={currentRoute == tabbar.link ? "isactive" : "isinactive"}> { tabbar.text } </div> 
                </div>
            ))
        } 
        </ul>  
        </div>
    );
}