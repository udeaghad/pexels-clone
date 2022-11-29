import Link from "next/link";

/**
 * Represents the menu dropdown container.
 * @function
 * @param {string} props - stores the value of the dropped down list.
 * @Description - this component works dynamically, it is both used to generate the hiden dropdown list both of "Explore" and
 * "Profile" on the menu
 */

export default function MenuDropdown(props) {
  const { dropdown } = props;
  return (
    <div className = "bg-white w-48 h-[auto] rounded-[20px] py-5 leading-9 font-medium" data-testid="yes">
      <ul style={{ listStyle: "none" }}>
        {dropdown.map((items, keys) => (
          <li className="hover:bg-slate-100 pl-6" key={keys}>
            <Link href={items} >{items}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}