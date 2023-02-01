import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";


/**
 * Tabmenu is a component used to manage the tab menu which aids in navigating to different pages.
 * @function
 * @param {object}  props - stores the value of the tab menu list.
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
        <ul className = "flex flex-row gap-4 text-slate-600 pt-6 " > 
        {
            tablist.map((tabbar, index) => ( 
                <div  className={currentRoute == tabbar.link ? "bg-black text-white h-12 flex justify-center items-center p-4 rounded-3xl cursor-pointer" : "bg-black h-12 flex justify-center items-center p-4 rounded-3xl cursor-pointer"}
                key = { tabbar.id }
                onClick = {
                    () => {
                        setRoute(tabbar.link);
                        
                    }
                } >
                <div  className={currentRoute == tabbar.link ? "active" : "inactive"}> { tabbar.text } </div> 
                </div>
            ))
        } 
        </ul>  
        </div>
    );
}