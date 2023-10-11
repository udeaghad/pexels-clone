import { BsApple, BsAndroid2 } from "react-icons/bs";

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

  return (
    <footer className="bg-black text-white px-5">
      <div className="text-xl py-4 font-medium">
        <span>Free photos and videos shared by talented creators.</span>
      </div>

      <div>
        <span className="text-slate-300">Download one of our apps.</span>
        <div className="inline-block">
          <div className="bg-white py-3 px-6 w-fit text-black font-bold rounded-md">
            <BsApple className="inline-block mr-2 text-2xl" />
            iOS
          </div>

          <div className="bg-white py-3 px-6 w-fit text-black font-bold rounded-md">
            <BsAndroid2 className="inline-block mr-2 text-2xl" />
            Android
          </div>
        </div>
      </div>

      <div>
        social media icons
      </div>

      <div>
        <h3>Pexels</h3>
        <div>
          {pexelsItems.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>

      <div>
        <h3>Company</h3>
        <div>
          {companyItems.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>

      <div>
        <h3>Free Stock Photos</h3>

        <div>
          {stockPhotosItems.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
      <p>© 2023 Pexels</p>

      <div>
        {footerLinks.map((link) => (
          <span>{link}</span>
        ))}
      </div>

      <div>English</div>
    </footer>
  );
}

export default FooterSection;
