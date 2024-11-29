import React from "react";
import { motion } from "framer-motion";

interface BrandSectionProps {
  title: string;
  imageUrl: string;
  isActive: boolean;
}

const BrandSection: React.FC<BrandSectionProps> = ({
  title,
  imageUrl,
  isActive,
}) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 relative">
      <div className="absolute inset-0">
        <motion.img
          src={imageUrl}
          alt={`Image for ${title}`}
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.h1
        className="text-4xl"
        style={{
          color: isActive ? "cyan" : "blue",
          opacity: isActive ? 1 : 0.5,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default BrandSection;
