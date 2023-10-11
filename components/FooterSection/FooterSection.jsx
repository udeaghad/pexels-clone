import { BsApple, BsInstagram } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaTwitter, FaPinterestP } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { TbWorld } from "react-icons/tb";

const FooterSection = () => {

  const pexelsItems = [
    "Free Stock Photos",
    "Free Videos",
    "Popular searches",
    "Collections",
    "Challenges",
    "Leaderboard",
    "Other plugins & apps",
  ]

  const companyItems = [
    "About",
    "Blog",
    "FAQ",
    "Become a hero",
    "Partner with Pexels",
    "Image & Video API",
    "Sign Up"
  ]

  const stockPhotosItems = [
    "Black and white photography",
    "Happy birthday images",
    "Free business videos",
    "Happy new year images",
    "Cool wallpapers",
    "Best HD wallpapers",
    "Galaxy wallpaper",
    "Lock screen wallpaper",
    "iPhone wallpaper",
    "4K wallpaper",
    "Samsung wallpaper",
    "Love wallpaper",
    "Mobile wallpaper",
  ]

  const footerLinks = [
    "Terms of Use",
    "Privacy Policy",
    "License",
    "Imprint",
    "Cookies Policy",
  ]

  const socialMediaItems = [
    {name: "Facebook", link: "#", icon: ImFacebook2},
    {name: "Twitter", link: "#", icon: FaTwitter},
    {name: "Instagram", link: "#", icon: BsInstagram},
    {name: "Pinterest", link: "#", icon: FaPinterestP},
  ]

  const RenderSocialMedia = () => {
    return (
      <div className="flex justify-start items-center gap-10 border-gray-800 mt-5">
        {socialMediaItems.map((item, i) => (
          <div key={i} className="text-white font-medium cursor-pointer hover:text-gray-300">
            <item.icon size={24}/>
          </div>
        ))}
      </div>
    )
  }

  return (
    <footer className="bg-black text-white p-5 lg:pt-10 lg:px-10">
      <div className="lg:flex gap-16 w-full">
        <div className="">

          <div className="text-xl py-4 font-medium lg:pt-10">
            <span>Free photos and videos shared by talented creators.</span>
          </div>

          <div className=" flex flex-col gap-2 pb-5">
            <span className="text-slate-400">Download one of our apps.</span>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-white py-2 px-5 w-fit text-black font-bold rounded-md cursor-pointer flex justify-center items-center flex-nowrap">
                <BsApple className="mr-2 text-xl" />
                iOS
              </div>

              <div className="bg-white py-2 px-5 w-fit text-black font-bold rounded-md cursor-pointer flex justify-center items-center flex-nowrap"> 
                <DiAndroid className="mr-2 text-xl"/>          
                Android
              </div>
            </div>
          </div>

          <RenderSocialMedia />
        </div>

        <div className="md:flex flex-col justify-start items-start w-full lg:flex-row lg:gap-20 lg:justify-evenly">

          <div className="mt-10 md:mt-10">
            <h3 className="text-2xl font-medium">Pexels</h3>
            <div className="mt-5 text-xl font-medium flex flex-col gap-1">
              {pexelsItems.map((item) => (
                <span key={item} className="hover:text-gray-400 cursor-pointer ">{item}</span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-medium">Company</h3>
            <div className="mt-5 text-xl font-medium flex flex-col gap-1">
              {companyItems.map((item) => (
                <span key={item} className="hover:text-gray-400 cursor-pointer">{item}</span>
              ))}
            </div>
          </div>
        </div>



        <div className="mt-10 md:mt-10">
          <h3 className="text-2xl font-medium mb-5 whitespace-nowrap">Free Stock Photos</h3>

          <div className="flex gap-2 justify-start items-end flex-wrap lg:flex-nowrap lg:flex-col lg:items-start">
            {stockPhotosItems.map((item) => (
              <span key={item} className="border border-gray-300 px-3 py-2 rounded-md text-gray-300 font-medium cursor-pointer hover:bg-gray-300 hover:text-black">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between items-start lg:mt-20">
        <div className="flex justify-center items-center mt-20 mb-10 lg:mt-0">
          <p className="text-gray-300 font-medium text-lg">© 2023 Pexels</p>
        </div>
 
        <div className="mb-8">
          <div className="flex flex-col justify-center items-center gap-1 lg:flex-row lg:gap-5">
            {footerLinks.slice(0,3).map((link) => (
              <span key={link} className="text-lg text-gray-300 font-medium hover:text-gray-500 cursor-pointer">{link}</span>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center gap-1 lg:justify-start lg:items-start">
            {footerLinks.slice(3).map((link) => (
              <span key={link} className="text-lg text-gray-300 font-medium hover:text-gray-500 cursor-pointer">{link}</span>
            ))}
          </div>
        </div>


        <div className="flex justify-center items-center pb-5">
          <div className="px-4 pb-1 pt-2 bg-[#7f7f7f] w-fit rounded-md flex justify-center items-center cursor-pointer">
              <TbWorld className="text-2xl mr-2 text-[#bfbfbf]"/>
              <span className="text-lg font-semibold">
                English
              </span>
          </div>
        </div>

      </div>


    </footer>
  )
}

export default FooterSection;