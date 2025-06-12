"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

//Navbar for my Developer portfolio.
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the Hamburger menu is open.
  const menuRef = useRef(null); // Reference for detecting clicks outside the menu.

  // Close menu if clicked outside.
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu on hover outside.
  function handleHoverOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
      setIsMenuOpen(false);
    }
  }

  return (
    <nav className="bg-slate-200 text-black p-3 rounded-lg sticky top-0 z-10 shadow-md">
      <div
        onMouseLeave={handleHoverOutside} // Handle hover outside.
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        {/* Title */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-700 drop-shadow-lg"
          >
            NAEEM DAVIDS
          </Link>
        </div>

        {/* Hamburger Icon for small screens. */}
        <div className="md:hidden text-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black text-xl focus:outline-none"
          >
            |Menu &#9776;| {/* Unicode for Hamburger Icon. */}
          </button>
        </div>

        {/* Menu Items. */}
        <div
          ref={menuRef} // Attach ref to this element
          className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-3 md:mt-0 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100`} // Ensure the menu is always visible on large screens
        >
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)} // Close menu when clicked.
            className="block px-4 py-2 border-2 border-blue-900 rounded-md transition-all duration-300 hover:bg-blue-900 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/#ABOUT"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-2 border-2 border-blue-900 rounded-md transition-all duration-300 hover:bg-blue-900 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/#PROJECTS"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-2 border-2 border-blue-900 rounded-md transition-all duration-300 hover:bg-blue-900 hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-2 border-2 border-blue-900 rounded-md transition-all duration-300 hover:bg-blue-900 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
