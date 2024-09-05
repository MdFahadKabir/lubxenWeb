// components/MasonryGallery.jsx
import { motion } from "framer-motion";
import Image from "next/image";
import gallary1 from "../../../public/images/lubxen_product1.jpeg";
import gallary2 from "../../../public/images/oil15.jpeg";
import gallary3 from "../../../public/images/product/drivemax_cvt.jpeg";
import gallary4 from "../../../public/images/product/dune_pro_mx_race.jpeg";
import gallary5 from "../../../public/images/product/velocity_nano.jpeg";
import gallary6 from "../../../public/images/product/torque_hvlp.jpeg";
import gallary7 from "../../../public/images/product/vector_hd.jpeg";
import gallary8 from "../../../public/images/product/comprol.jpeg";
import gallary9 from "../../../public/images/oil16.jpeg";
import gallary10 from "../../../public/images/product/moly_ep_grease.jpeg";
import gallary11 from "../../../public/images/product/bentonite_grease.jpeg";
import gallary12 from "../../../public/images/product/marine_gear_oil.jpeg";
import gallary13 from "../../../public/images/oil17.jpeg";
import gallary14 from "../../../public/images/product/marine_engine_oil.jpeg";
import gallary15 from "../../../public/images/product/marine_2t_oil.jpeg";

// Sample data for images
const images = [
  { src: gallary1, alt: "Image 1" },
  { src: gallary2, alt: "Image 2" },
  { src: gallary3, alt: "Image 3" },
  { src: gallary4, alt: "Image 4" },
  { src: gallary5, alt: "Image 5" },
  { src: gallary6, alt: "Image 6" },
  { src: gallary7, alt: "Image 7" },
  { src: gallary8, alt: "Image 8" },
  { src: gallary9, alt: "Image 9" },
  { src: gallary10, alt: "Image 10" },
  { src: gallary11, alt: "Image 11" },
  { src: gallary12, alt: "Image 12" },
  { src: gallary13, alt: "Image 13" },
  { src: gallary14, alt: "Image 14" },
  { src: gallary15, alt: "Image 15" },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const MasonryGallery = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg break-inside-avoid"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
