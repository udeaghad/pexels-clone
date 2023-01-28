import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

export default function Tabmenu(props) {
    const { tablist, link } = props;
    const [showTabMenu, setTabMenu] = useState();

    const activeTabMenu = () => {
        setTabMenu(true);
    };

    return (
         <div>
        <ul className = "flex flex-row gap-4 text-slate-600 pt-6 " > 
        {
            tablist.map((tabbar, index) => ( 
                <div  className={Router.pathname == tabbar.link ? "bg-black text-white h-12 flex justify-center items-center p-4 rounded-3xl " : "h-12 flex justify-center items-center p-4 rounded-3xl"}
                key = { tabbar.id }
                onClick = {
                    () => {
                        setTabMenu(index);
                        Router.push(`/${tabbar.link}`);
                    }
                } >
                <div> { tabbar.text } </div> 
                </div>
            ))
        } 
        </ul>  
        </div>
    );
}