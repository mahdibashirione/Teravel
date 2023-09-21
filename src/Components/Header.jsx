import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [navItems, setNavItems] = useState([
    { id: 1, title: "Category", url: "/category" },
    { id: 2, title: "About us", url: "/about-us" },
    { id: 3, title: "Home", url: "/" },
    { id: 4, title: "Tours", url: "/tours" },
    { id: 5, title: "Contact", url: "/contact" },
  ]);
  const { pathname } = useLocation();

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-2xl bg-white/40">
      <div className="container flex justify-between items-center px-4 py-6 max-w-7xl">
        <button className="md:hidden">
          <FiMenu className="text-2xl" />
        </button>
        {/* Logo Site */}
        <Link className="block" to="/">
          <img
            src="/public/image/TravelInt.svg"
            loading="lazy"
            alt="Travel.int"
          />
        </Link>
        {/* Navbar */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-8 2xl:gap-x-10">
            {navItems.map((link) => {
              return (
                <li>
                  <NavLink
                    className={`block border-b-2 text-lg ${
                      pathname === link.url
                        ? "border-primary text-zinc-900 font-bold"
                        : "text-[#AEAEAE] border-transparent"
                    }`}
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Button Register */}
        <div className="flex text-sm md:text-base items-center gap-2">
          <Link to="/signup" className="hidden md:block rounded-lg py-2 px-3">
            Sign Up
          </Link>
          <Link
            to="/login"
            className="rounded-lg bg-primary text-white py-2 px-4"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
