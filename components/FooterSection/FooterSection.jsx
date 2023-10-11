import { BsApple, BsInstagram } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaTwitter, FaPinterestP } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

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
      <div className="flex justify-start items-center gap-10 border-gray-800">
        {socialMediaItems.map((item, i) => (
          <div key={i} className="text-white font-medium cursor-pointer hover:text-gray-500">
            <item.icon size={24}/>
          </div>
        ))}
      </div>
    )
  }

  return (
    <footer className="bg-black text-white px-5">
      <div className="text-xl py-4 font-medium">
        <span>Free photos and videos shared by talented creators.</span>
      </div>

      <div className=" flex flex-col gap-2 pb-5">
        <span className="text-slate-300">Download one of our apps.</span>
        <div className="flex justify-start items-center gap-2">
          <div className="bg-white py-2 px-6 w-fit text-black font-bold rounded-md">
            <BsApple className="inline-block mr-2 text-xl" />
            iOS
          </div>

          <div className="bg-white py-2 px-6 w-fit text-black font-bold rounded-md"> 
            <DiAndroid className="inline-block mr-2 text-xl"/>          
            Android
          </div>
        </div>
      </div>

      <RenderSocialMedia />
    </footer>
  )
}

export default FooterSection;