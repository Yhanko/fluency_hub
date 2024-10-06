import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-24 px-16 flex justify-between fixed items-center w-full z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-lg bg-[#1F1C14]/10" : ""
      }`}
    >
      <a href="/">
        <Logo />
      </a>

      <ul className="flex w-1/4 gap-2 justify-between items-center text-[#1F1C14]">
        <a href="" className="hover:text-white transition-colors duration-300">
          <li>Course</li>
        </a>
        <a href="" className="hover:text-white transition-colors duration-300">
          <li>Commentary</li>
        </a>
        <a href="" className="hover:text-white transition-colors duration-300">
          <li>About Us</li>
        </a>
      </ul>

      <button className="bg-[#362B0E] hover:border border-[#362B0E] hover:text-[#362B0E] hover:bg-transparent text-white px-4 py-2 h-12 rounded-2xl transition-colors duration-300 w-28">
        Contact
      </button>
    </header>
  );
};

export default Header;
