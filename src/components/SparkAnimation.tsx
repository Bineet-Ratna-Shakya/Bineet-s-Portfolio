import { motion } from 'framer-motion';
import React from 'react';

const SparkAnimation: React.FC = () => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 100, 0],
        opacity: [0, 0.5, 0],
        x: [0, 100, -100, 0],
        y: [0, -100, 100, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default SparkAnimation;