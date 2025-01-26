import React from 'react';
import { motion } from 'framer-motion';
import LampEffect from './LampEffect';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isDark: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  isDark,
}) => {
  return (
    <LampEffect isDark={isDark}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2
          className={`text-4xl font-light mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </LampEffect>
  );
};

export default SectionHeader;
