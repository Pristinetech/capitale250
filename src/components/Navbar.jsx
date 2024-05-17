import { useState } from "react";
import IscoLogo from "../assets/isco-icon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#100430] p-4 relative z-40">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="flex justify-between xw-full text-xl font-bold text-white">
          <img className="lg:block" src={IscoLogo} alt="isco logo" />
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } flex flex-col flex-wrap lg:flex-row justify-center lg:space-x-28 text-[20px] mt-10 lg:mt-0`}
        >
          <a href="#home" className="text-white w-fit hover:text-gray-200">
            Home
          </a> 
          <a href="#about" className="text-white w-fit hover:text-gray-200">
            About Us
          </a>
          <a href="#what-we-do" className="text-white hover:text-gray-200">
            What We Do
          </a>
          <a href="#articles" className="text-white hover:text-gray-200">
            Articles
          </a>
          <a href="#contact-us" className="text-white hover:text-gray-200">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
