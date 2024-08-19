"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import LubxenLogo from "../../../public/images/LubxenLogo.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Use Next.js usePathname hook to get the current path

  useEffect(() => {
    // Handle scroll to add blur effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linksLeft = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Service", href: "/service" },
    { id: 3, name: "Blog", href: "/blog" },
  ];

  const linksRight = [
    { id: 4, name: "About", href: "/about" },
    { id: 5, name: "Team", href: "/team" },
    { id: 6, name: "Contact", href: "/contact" },
  ];

  // Function to check if the link is active
  const isActive = (href) => pathname === href;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-30 sticky top-0 w-full shadow-md backdrop-filter ${
          scrolled ? "backdrop-blur-lg bg-white/80" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-8">
          {/* Left Links */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-6"
          >
            {linksLeft.map(({ id, name, href }) => (
              <Link key={id} href={href} legacyBehavior>
                <a
                  className={`text-lg font-medium hover:scale-105 transition duration-200 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#BF1D2F] after:scale-x-0 after:transition-transform after:duration-300 ${
                    isActive(href) ? "text-[#BF1D2F]" : "text-[#0A529B]"
                  } hover:after:scale-x-100`}
                >
                  {name}
                </a>
              </Link>
            ))}
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
                  className="w-auto h-28 md:h-20"
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
              <Link key={id} href={href} legacyBehavior>
                <a
                  className={`text-lg font-medium hover:scale-105 transition duration-200 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#BF1D2F] after:scale-x-0 after:transition-transform after:duration-300 ${
                    isActive(href) ? "text-[#BF1D2F]" : "text-[#0A529B]"
                  } hover:after:scale-x-100 `}
                >
                  {name}
                </a>
              </Link>
            ))}
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
              className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#BF1D2F] text-white"
            >
              {linksLeft.concat(linksRight).map(({ id, name, href }) => (
                <li key={id} className="px-4 py-6 text-2xl">
                  <Link href={href} legacyBehavior>
                    <a
                      onClick={() => {
                        setNav(false);
                      }}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Image from "next/image";
// import LubxenLogo from "../../../public/images/LubxenLogo.png";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import Loader from "./Loader";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [loading, setLoading] = useState(false); // State for the loading indicator
//   const pathname = usePathname();

//   useEffect(() => {
//     // Handle scroll to add blur effect
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleLinkClick = (href) => {
//     setLoading(true); // Show loader on link click
//     setNav(false); // Close mobile menu if open

//     setTimeout(() => {
//       window.location.href = href;
//       setLoading(false); // Hide loader after transition
//     }, 10000); // Simulate a loading delay (you can adjust the duration)
//   };

//   const linksLeft = [
//     { id: 1, name: "Home", href: "/" },
//     { id: 2, name: "Service", href: "/service" },
//     { id: 3, name: "Blog", href: "/blog" },
//   ];

//   const linksRight = [
//     { id: 4, name: "About", href: "/about" },
//     { id: 5, name: "Team", href: "/team" },
//     { id: 6, name: "Contact", href: "/contact" },
//   ];

//   // Function to check if the link is active
//   const isActive = (href) => pathname === href;

//   return (
//     <>
//       {loading && <Loader />}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className={`z-30 sticky top-0 w-full shadow-md backdrop-filter ${
//           scrolled ? "backdrop-blur-lg bg-white/80" : "bg-white"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-8">

//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="hidden md:flex space-x-6"
//           >
//             {linksLeft.map(({ id, name, href }) => (
//               <a
//                 key={id}
//                 href={href}
//                 onClick={() => handleLinkClick(href)}
//                 className={`text-lg font-medium hover:scale-105 transition duration-200 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#BF1D2F] after:scale-x-0 after:transition-transform after:duration-300 ${
//                   isActive(href) ? "text-[#BF1D2F]" : "text-[#0A529B]"
//                 } hover:after:scale-x-100`}
//               >
//                 {name}
//               </a>
//             ))}
//           </motion.div>

//           {/* Logo */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="flex justify-center"
//           >
//             <Link href="/" legacyBehavior>
//               <a>
//                 <Image
//                   src={LubxenLogo}
//                   alt="Lubxen"
//                   width={800}
//                   height={800}
//                   className="w-auto h-28 md:h-20"
//                 />
//               </a>
//             </Link>
//           </motion.div>

//           {/* Right Links */}
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="hidden md:flex space-x-6"
//           >
//             {linksRight.map(({ id, name, href }) => (
//               <a
//                 key={id}
//                 href={href}
//                 onClick={() => handleLinkClick(href)}
//                 className={`text-lg font-medium hover:scale-105 transition duration-200 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#BF1D2F] after:scale-x-0 after:transition-transform after:duration-300 ${
//                   isActive(href) ? "text-[#BF1D2F]" : "text-[#0A529B]"
//                 } hover:after:scale-x-100`}
//               >
//                 {name}
//               </a>
//             ))}
//           </motion.div>

//           {/* Hamburger Menu */}
//           <div
//             onClick={() => setNav(!nav)}
//             className="cursor-pointer text-[#BF1D2F] md:hidden z-40"
//           >
//             {nav ? (
//               <FaTimes size={30} className="text-white" />
//             ) : (
//               <FaBars size={30} />
//             )}
//           </div>

//           {/* Mobile Menu */}
//           {nav && (
//             <motion.ul
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 100 }}
//               className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#BF1D2F] text-white"
//             >
//               {linksLeft.concat(linksRight).map(({ id, name, href }) => (
//                 <li key={id} className="px-4 py-6 text-2xl">
//                   <a href={href} onClick={() => handleLinkClick(href)}>
//                     {name}
//                   </a>
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Navbar;
