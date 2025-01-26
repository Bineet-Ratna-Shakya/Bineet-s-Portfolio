import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Database,
  Cpu,
  Palette,
  LineChart,
  Wrench,
  Brain,
  GitBranch,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 95, category: 'languages' },
  { name: 'JavaScript/TypeScript', level: 90, category: 'languages' },
  { name: 'C++', level: 85, category: 'languages' },
  { name: 'R', level: 80, category: 'languages' },

  // Frameworks & Libraries
  { name: 'TensorFlow', level: 90, category: 'frameworks' },
  { name: 'PyTorch', level: 85, category: 'frameworks' },
  { name: 'React', level: 90, category: 'frameworks' },
  { name: 'Node.js', level: 85, category: 'frameworks' },

  // AI & ML
  { name: 'Deep Learning', level: 90, category: 'ai' },
  { name: 'NLP', level: 85, category: 'ai' },
  { name: 'Computer Vision', level: 80, category: 'ai' },
  { name: 'Reinforcement Learning', level: 75, category: 'ai' },

  // Tools & Technologies
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 85, category: 'tools' },
  { name: 'AWS', level: 80, category: 'tools' },
  { name: 'Linux', level: 85, category: 'tools' },
];

const categories = [
  { id: 'languages', label: 'Languages', icon: Code },
  { id: 'frameworks', label: 'Frameworks', icon: Database },
  { id: 'ai', label: 'AI & ML', icon: Brain },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
    >
      <h3 className="text-lg text-white mb-2">{skill.name}</h3>
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-10"
        />
      )}
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('languages');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory
  );

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and
            proficiencies
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
