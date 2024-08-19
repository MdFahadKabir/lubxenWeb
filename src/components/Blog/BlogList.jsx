// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import blogs from "@/app/data/Blog";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const imageHover = {
//   hover: {
//     scale: 1.05,
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
// };

// const cardHover = {
//   hover: {
//     scale: 1.02,
//     boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
//     transition: { duration: 0.4, ease: "easeInOut" },
//   },
// };

// const borderColor = {
//   initial: { borderColor: "#38BDF8" }, // sky-500
//   hover: {
//     borderColor: "#FB923C", // [#BF1D2F]
//     transition: { duration: 0.4, ease: "easeInOut" },
//   },
// };

// export default function BlogsList() {
//   return (
//     <div className="mx-40">
//       <motion.div
//         className="grid grid-cols-3 gap-6"
//         initial="hidden"
//         animate="visible"
//       >
//         {blogs.map((blog) => (
//           <motion.div key={blog.id} variants={fadeInUp}>
//             <Link href={`/blog/${blog.slug}`}>
//               <motion.div
//                 className="w-full h-full cursor-pointer rounded-lg bg-white shadow-lg overflow-hidden"
//                 variants={cardHover}
//                 whileHover="hover"
//               >
//                 <motion.div variants={imageHover}>
//                   <Image
//                     width={400}
//                     height={400}
//                     className="w-full h-auto rounded-t-lg"
//                     src={blog.image}
//                     alt={blog.name}
//                   />
//                 </motion.div>

//                 <div className="flex flex-row">
//                   <motion.p
//                     className="border-l-4 h-16 my-auto"
//                     variants={borderColor}
//                     initial="initial"
//                     whileHover="hover"
//                   ></motion.p>
//                   <div className="p-5">
//                     <motion.p
//                       className="mulish-regular text-sm text-gray-500"
//                       variants={fadeInUp}
//                     >
//                       {blog.date}
//                     </motion.p>
//                     <motion.p
//                       className="capitalize poppins-bold text-lg sm:text-xl md:text-xl lg:text-xl leading-normal  text-black mt-2"
//                       variants={fadeInUp}
//                     >
//                       {blog.name.substring(0, 25)}...
//                     </motion.p>
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import blogs from "@/app/data/Blog";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const cardHover = {
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const borderColor = {
  initial: { borderColor: "#38BDF8" }, // sky-500
  hover: {
    borderColor: "#FB923C", // [#BF1D2F]
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function BlogsList() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
      >
        {blogs.map((blog) => (
          <motion.div key={blog.id} variants={fadeInUp}>
            <Link href={`/blog/${blog.slug}`}>
              <motion.div
                className="w-full h-full cursor-pointer rounded-lg bg-white shadow-lg overflow-hidden"
                variants={cardHover}
                whileHover="hover"
              >
                <motion.div variants={imageHover}>
                  <Image
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-t-lg"
                    src={blog.image}
                    alt={blog.name}
                    layout="responsive"
                  />
                </motion.div>

                <div className="flex flex-row">
                  <motion.p
                    className="border-l-4 border-[#38BDF8] h-16 my-2 sm:my-auto"
                    variants={borderColor}
                    initial="initial"
                    whileHover="hover"
                  ></motion.p>
                  <div className="p-4 sm:p-5 flex-1">
                    <motion.p
                      className="mulish-regular text-sm text-gray-500"
                      variants={fadeInUp}
                    >
                      {blog.date}
                    </motion.p>
                    <motion.p
                      className="capitalize poppins-bold text-base sm:text-lg lg:text-xl leading-normal text-black mt-2"
                      variants={fadeInUp}
                    >
                      {blog.name.length > 25
                        ? `${blog.name.substring(0, 25)}...`
                        : blog.name}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
