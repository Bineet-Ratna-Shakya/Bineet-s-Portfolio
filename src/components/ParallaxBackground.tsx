import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  isDark: boolean;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ isDark }) => {
  const { scrollYProgress } = useScroll();
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8],
    isDark 
      ? ['#000000', '#1a1a1a', '#333333']
      : ['#ffffff', '#f5f5f5', '#e5e5e5']
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 0.6, 0.4]
  );

  return (
    <motion.div
      className="fixed inset-0 -z-10 transition-colors duration-500"
      style={{ backgroundColor }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"
        style={{ opacity }}
      />
    </motion.div>
  );
};

export default ParallaxBackground;