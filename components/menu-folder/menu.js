import Link from "next/link";
import React from 'react';

/**
 * Represents the menu dropdown container.
 * @function
 * @param {string} props - stores the value of the dropped down list.
 * @Description - this component works dynamically, it is both used to generate the hidden 
 * dropdown list both of "Explore" and
 * "Profile" on the menu
 */

export default function MenuDropdown(props) {
    const { dropdown } = props;
    return (
        //data test id is the id used to get a elements passed as arguments to the test files
        <div className="bg-white w-48 h-[auto] rounded-[20px] py-5 leading-9 font-medium" data-testid="dropdown-list">
            <ul style={{ listStyle: "none" }}>
                {dropdown.map((items, keys) => (
                    <li className="hover:bg-slate-100 pl-6" key={keys.id}>
                        <Link href={items.cta} >{items.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}