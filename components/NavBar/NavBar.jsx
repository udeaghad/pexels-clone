import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
const navitems = [
  {
    name: 'Home',
    link: '#'
  },
  {
    name: 'Videos',
    link: '#'
  },
  {
    name: 'Leaderboard',
    link: '#'
  },
  {
    name: 'Challenges',
    link: '#'
  },
];

const Navbar = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 100;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 100;
  }

  return (
   <nav className="relative flex justify-between items-center w-full mt-5 ml-0">
    <div className="absolute bg-gradient-to-r w-16 h-16 from-white flex items-center">
      <MdKeyboardArrowLeft size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideLeft}/>

    </div>
    <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-5">
      {navitems.map((item) => (
        <Link href={item.link}>
          <span className="py-3 px-5 text-lg rounded-full hover:text-slate-200 hover:bg-black cursor-pointer inline-block font-semibold text-gray-500">{item.name}</span>
        </Link>

      ))}
    </div>
    <MdKeyboardArrowRight size={30} className="text-gray-500" onClick={slideRight}/>
   </nav>
  )
}

export default Navbar;