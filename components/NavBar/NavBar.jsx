import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";


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

  return (
   <nav className="relative flex justify-between items-center w-full mt-5 ml-0">
    <div className="absolute bg-gradient-to-r w-12 h-16 from-white justify-start items-center" style={{display: startView && !endView ? "none" : startView && !endView ? "flex" : "flex"}}>
      <MdKeyboardArrowLeft size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideLeft}/>

    </div>

    <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide px-5">
      <span className="py-3 px-5 text-lg rounded-full hover:text-slate-200 hover:bg-black cursor-pointer inline-block font-semibold text-gray-500">
        <Link href="/"ref={start}>
          Home
        </Link>
      </span>
      

      <span className="py-3 px-5 text-lg rounded-full hover:text-slate-200 hover:bg-black cursor-pointer inline-block font-semibold text-gray-500">
        <Link href="/videos">
          Videos
        </Link>
      </span>

      <span className="py-3 px-5 text-lg rounded-full hover:text-slate-200 hover:bg-black cursor-pointer inline-block font-semibold text-gray-500">
        <Link href="#">
          Leaderboard
        </Link>
      </span>

      <span className="py-3 px-5 text-lg rounded-full hover:text-slate-200 hover:bg-black cursor-pointer inline-block font-semibold text-gray-500">
        <Link href="#" ref={end}>
          Challenges
        </Link>
      </span>
    </div>
     

    
    <div className="absolute bg-gradient-to-l w-12 h-16 from-white justify-end items-center right-0" style={{display: !startView && endView ? "none" : startView && endView ? "flex": "flex"}}>
      <MdKeyboardArrowRight size={30} className="text-gray-900 opacity-50 bg-[inherit] bg-blend-lighten" onClick={slideRight}/>

    </div>
   </nav>
  )
}

export default Navbar;