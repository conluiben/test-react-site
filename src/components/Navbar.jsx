import iconHambuger from "../assets/icon-hamburger.svg";

const Navbar = () => {
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
      <div className="sticky top-0 flex items-stretch gap-x-0 h-[80px] bg-white z-10">
        <div className="flex items-center px-4 lg:hidden">
          <img src={iconHambuger} alt="Menu Icon" className="w-[20px]" />
        </div>
        <div className="grow flex items-center px-8 gap-x-16">
          <img
            src="https://assets.coredataresearch.com/coredata.com.au/images/core-data-logo-retina.png"
            alt="CoreData logo"
            className="max-h-[40px]"
          />
          <div className="hidden lg:flex items-center gap-x-6">
            {menuItems.map((aLink, idx) => (
              <a href="#" key={idx}>
                {aLink}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-[#E87722] px-4 text-white">
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
