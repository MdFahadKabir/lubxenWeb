import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import LubxenLogo from "../../../public/images/LubxenLogo.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    document.documentElement.classList.toggle("dark", storedDarkMode);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const linksLeft = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: "Company",
      dropdown: true,
      links: [
        { id: 3, name: "About us", href: "/about" },
        {
          id: 4,
          name: "Executive Message Board",
          href: "/executive_message_board",
        },
      ],
    },
    // { id: 5, name: "Service", href: "/service" },
    {
      id: 5,
      name: "Product",
      dropdown: true,
      links: [
        { id: 6, name: "Product", href: "/product" },
        {
          id: 7,
          name: "Download Product Catalogue",
          href: "/product_catalog.pdf",
          isDownload: true,
        },
        {
          id: 8,
          name: "Download Base Oil Catalogue",
          href: "/lubrex_base oil_catalog.pdf",
          isDownload: true,
        },
      ],
    },
  ];

  const linksRight = [
    { id: 9, name: "E&A", href: "/blog" },
    { id: 10, name: "Contact Us", href: "/contact" },
    { id: 11, name: "Become A Distributor", href: "/become_a_distributor" },
  ];

  const isActive = (href) => pathname === href;
  const handleDropdownEnter = (id) => {
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleNav = () => {
    setNav(!nav);
    setActiveDropdown(null); // Close dropdown when the mobile menu is toggled
  };

  return (
    <>
      <div className="z-40 relative">
        {/* <GoogleTranslate /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={` w-full backdrop-filter ${
            scrolled
              ? "backdrop-blur-lg bg-[#F5F7F9]/80 dark:bg-black/80 md:dark:bg-black shadow-md"
              : "bg-[#F5F7F9]/80 md:bg-transparent dark:bg-black md:dark:bg-black"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-8">
            {/* Left Links */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex space-x-6 relative"
            >
              {linksLeft.map(
                ({ id, name, href, dropdown, links, isDownload }) =>
                  dropdown ? (
                    <div
                      key={id}
                      onMouseEnter={() => handleDropdownEnter(id)}
                      onMouseLeave={handleDropdownLeave}
                      className="relative my-auto"
                    >
                      <div
                        className={`text-lg font-medium cursor-pointer hover:scale-105 transition duration-200 flex flex-row ${
                          isActive("/company")
                            ? "text-[#BF1D2F]"
                            : "text-[#0A529B] dark:text-white"
                        }`}
                      >
                        <p>{name}</p>
                        <FaChevronDown className="my-auto ml-2" />
                      </div>

                      {activeDropdown === id && (
                        <div className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md z-50">
                          {links.map(({ id, name, href, isDownload }) => (
                            <Link
                              key={id}
                              href={href || "#"}
                              target={isDownload ? "_blank" : "_self"}
                              rel={
                                isDownload ? "noopener noreferrer" : undefined
                              }
                              legacyBehavior
                            >
                              <a
                                className={`block px-4 py-2 text-sm text-[#0A529B] hover:bg-[#BF1D2F] hover:text-white duration-700`}
                              >
                                {name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={id} href={href || "#"} legacyBehavior>
                      <a
                        className={`text-lg font-medium hover:scale-105 transition duration-200 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#BF1D2F] after:scale-x-0 after:transition-transform after:duration-300 ${
                          isActive(href) ? "text-[#BF1D2F]" : "text-[#0A529B]"
                        } hover:after:scale-x-100`}
                      >
                        {name}
                      </a>
                    </Link>
                  )
              )}
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Link href="/" legacyBehavior>
                <a>
                  <Image
                    src={LubxenLogo}
                    alt="Lubxen"
                    width={800}
                    height={800}
                    className="w-auto h-28 md:h-32"
                  />
                </a>
              </Link>
            </motion.div>

            {/* Right Links */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex space-x-6"
            >
              {linksRight.map(({ id, name, href }) => (
                <Link key={id} href={href || "#"} legacyBehavior>
                  <a
                    className={`my-auto ${
                      name === "Become A Distributor"
                        ? "text-lg text-white bg-[#BF1D2F] hover:bg-[#0A529B] duration-700 px-4 py-2 rounded-full relative before:absolute before:inset-y-[5px] before:inset-x-[45px] before:rounded-full before:border-2 before:border-[#BF1D2F] before:animate-ping before:z-[-1]"
                        : "text-lg font-medium hover:scale-105 transition duration-200 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#BF1D2F] after:scale-x-0 after:transition-transform after:duration-300 "
                    } ${
                      isActive(href)
                        ? "text-[#BF1D2F]"
                        : "text-[#0A529B] dark:text-white"
                    } ${
                      name !== "Become A Distributor"
                        ? "hover:after:scale-x-100"
                        : ""
                    }`}
                  >
                    {name}
                  </a>
                </Link>
              ))}
              {/* Dark mode toggle button */}
              <button
                onClick={toggleDarkMode}
                className="text-2xl text-[#BF1D2F] dark:text-[#0A529B] transition-colors duration-300"
              >
                {darkMode ? <FaSun className="dark:text-white" /> : <FaMoon />}
              </button>
            </motion.div>

            {/* Hamburger Menu */}
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer text-[#BF1D2F] md:hidden z-40"
            >
              {nav ? (
                <FaTimes size={30} className="text-white" />
              ) : (
                <FaBars size={30} />
              )}
            </div>

            {/* Mobile Menu */}
            {nav && (
              <motion.ul
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex flex-col justify-center items-center text-start absolute top-0 left-0 w-full h-screen bg-[#BF1D2F] text-white"
              >
                {linksLeft.map(({ id, name, href, dropdown, links }) =>
                  dropdown ? (
                    <li
                      key={id}
                      className="px-4 py-6 text-base relative w-full "
                    >
                      <div
                        className="flex flex-row cursor-pointer"
                        onClick={() =>
                          setActiveDropdown(activeDropdown === id ? null : id)
                        }
                      >
                        <p>{name}</p>
                        <FaChevronDown className="my-auto ml-2" />
                      </div>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{
                          height: activeDropdown === id ? links.length * 50 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="overflow-hidden"
                      >
                        <motion.ul
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="w-full bg-[#BF1D2F] mt-2"
                        >
                          {links.map(({ id, name, href }) => (
                            <li key={id} className="px-4 py-2 ">
                              <Link href={href || "#"} legacyBehavior>
                                <a
                                  onClick={() => {
                                    setNav(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    </li>
                  ) : (
                    <li key={id} className="px-4 py-6 text-base  w-full">
                      <Link href={href || "#"} legacyBehavior>
                        <a
                          onClick={() => {
                            setNav(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {name}
                        </a>
                      </Link>
                    </li>
                  )
                )}
                {linksRight.map(({ id, name, href }) => (
                  <li key={id} className="px-4 py-6 text-base  w-full">
                    <Link href={href || "#"} legacyBehavior>
                      <a
                        onClick={() => {
                          setNav(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {name}
                      </a>
                    </Link>
                  </li>
                ))}
                <li className="px-4 py-6 text-base w-full">
                  <button
                    onClick={toggleDarkMode}
                    className="text-2xl text-white dark:text-gray-200"
                  >
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </button>
                </li>
              </motion.ul>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
