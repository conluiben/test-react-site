import iconHambuger from "../assets/icon-hamburger.svg";
import cdLogoWhite from "../assets/cd-white.png";
import cdLogoBlack from "../assets/cd-black.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); // threshold
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const menuItems = [
    "Home",
    "Who we are",
    "What we do",
    "CD Insights",
    "Career",
    "Contact Us",
  ];
  return (
    <>
      <div
        className={`fixed w-full top-0 flex items-stretch gap-x-0 h-[80px] z-10 transition-colors duration-200 px-6 py-4 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex items-center px-4 lg:hidden">
          <img src={iconHambuger} alt="Menu Icon" className="w-[20px]" />
        </div>
        <div
          className={`grow flex items-center px-8 gap-x-16 transition-colors duration-200 bg-transparent`}
        >
          <img
            src={scrolled ? cdLogoBlack : cdLogoWhite}
            alt="CoreData logo"
            className="max-h-[40px]"
          />
          <div className="hidden lg:flex items-center gap-x-6">
            {menuItems.map((aLink, idx) => (
              <a
                href="#"
                key={idx}
                className={`${scrolled ? "text-black" : "text-white"}`}
              >
                {aLink}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-[#008080] px-4 text-white text-xl 2xl:text-[2vh] rounded-xl">
          <a href="https://poe-au.coredata.com.au" target="_blank">
            JOIN US
          </a>
        </div>
      </div>
      {/* mobile navbar */}
      <div></div> {/* sidebar (when menu clicked) */}
    </>
  );
};

export default Navbar;
