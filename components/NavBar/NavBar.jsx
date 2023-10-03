import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';


const navigationItems = [
  {name: "Home", link: "/", start: true, end: false, selected: true},
  {name: "Videos", link: "/videos", start: false, end: false, selected: false},
  {name: "Leaderboard", link: "#", start: false, end: false,  selected: false},
  {name: "Challenges", link: "#", start: false, end: true, selected: false},
]


const Navbar = () => {
  const { ref: start, inView: startView} = useInView();
  const { ref: end, inView: endView} = useInView();


  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 50;
  };



  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 50;
  }

  const [navItems, setNavItems] = useState(navigationItems)

  const handleSelected=(item) => {
    const newNavItems = navItems.map(nav => {
      if ( nav.name === item.name) {
        return {...nav, selected: true}
      } else {
        return {...nav, selected: false}
      }
    })

    setNavItems(newNavItems)
  }


  return (
   <nav className="relative flex justify-between items-center w-full mt-5 ml-0">
    <div className='flex justify-start items-center sm:hidden'>
      <div className="absolute bg-gradient-to-r w-12 h-16 from-white justify-start items-center" style={{display: startView && !endView ? "none" : !startView && !endView ? "flex" : "flex"}}>
        <MdKeyboardArrowLeft size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideLeft}/>
      </div>
    </div>


    <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-5 sm:flex justify-center items-center">
      {navItems.map((item, i) => (
        <div key={i} className={`py-3 px-5 text-lg rounded-full hover:text-slate-100 cursor-pointer inline-block font-medium text-gray-600 ${ item.selected ? "bg-black text-slate-100" : null}`} onClick={() => handleSelected(item)} >
          <Link href={item.link} ref={item.start ? start : item.end ? end : null}>
            {item.name}
          </Link>
        </div>
      ))}


    </div>
     

    <div className='flex justify-start items-center sm:hidden'>
      <div className="absolute bg-gradient-to-l w-12 h-16 from-white justify-end items-center right-0" style={{display: !startView && endView ? "none" : !startView && !endView ? "flex": "flex"}}>
        <MdKeyboardArrowRight size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideRight}/>
      </div>
    </div>

   </nav>
  )
}

export default Navbar;