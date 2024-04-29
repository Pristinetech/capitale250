import IscoLogo from "../assets/isco-icon.svg";

const Navbar = () => {
  return (
    <header className="bg-[#100430] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">
            <img src={IscoLogo} alt="isco logo" />
        </div>
        <nav className="flex w-full justify-center space-x-32">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            What We Do
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Articles
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
