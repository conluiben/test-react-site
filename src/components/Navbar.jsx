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
      <div className="sticky top-0 flex items-stretch gap-x-0 h-[50px] bg-white z-10">
        <div className="flex items-center px-4">
          <img src={iconHambuger} alt="Menu Icon" className="w-[20px]" />
        </div>
        <div className="grow flex items-center">
          <img
            src="https://assets.coredataresearch.com/coredata.com.au/images/core-data-logo-retina.png"
            alt="CoreData logo"
            className="max-h-[40px]"
          />
        </div>
        <div className="flex items-center bg-[rgb(7,155,218)] px-4">
          <button>JOIN US</button>
        </div>
      </div>
      {/* mobile navbar */}
      <div></div> {/* sidebar (when menu clicked) */}
    </>
  );
};

export default Navbar;
