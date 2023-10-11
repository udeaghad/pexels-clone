const Footer = () => {
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
    <footer className="bg-black text-white px-3">
      <span>Free photos and videos shared by talented creators.</span>

      <div>
        <span>Download one of our apps.</span>
        <div>
          <div>
            ios
          </div>

          <div>
            Android
          </div>
        </div>
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

export default Footer;