// components/MasonryGallery.jsx
import { motion } from "framer-motion";
import Image from "next/image";
import gallary1 from "../../../public/images/gola4.png";
import gallary2 from "../../../public/images/Lubxen1.png";
import gallary3 from "../../../public/images/Lubxen2.png";
import gallary4 from "../../../public/images/Lubxen3.png";
import gallary5 from "../../../public/images/Lubxen4.png";

// Sample data for images
const images = [
  { src: gallary1, alt: "Image 1" },
  { src: gallary2, alt: "Image 2" },
  { src: gallary3, alt: "Image 3" },
  { src: gallary4, alt: "Image 4" },
  { src: gallary5, alt: "Image 5" },

  // Add more images as needed
];
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const MasonryGallery = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg"
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
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
