import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import InteractiveSparkAnimation from './components/InteractiveSparkAnimation';
import ParallaxBackground from './components/ParallaxBackground'; // Ensure this is where the map will be
import SparkAnimation from './components/SparkAnimation';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection'; // Added the SkillsSection import
import { ArrowDownCircle } from 'lucide-react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <Navigation />
      <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
      <InteractiveSparkAnimation isDark={isDarkTheme} />

      {/* Parallax Background (Map) goes above the hero section */}
      <ParallaxBackground isDark={isDarkTheme} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <SparkAnimation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center z-10 px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={`mb-8 text-xl ${
              isDarkTheme ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Hi, I'm Bineet Shakya
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            Turning Data into Dreams
            <br />
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto mb-8 ${
              isDarkTheme ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Specializing in creating innovative solutions that inspire and
            deliver results
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-medium transition-colors ${
              isDarkTheme
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDownCircle
            className={`w-8 h-8 animate-bounce ${
              isDarkTheme ? 'text-white' : 'text-black'
            }`}
          />
        </motion.div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="Background"
            className={`w-full h-full object-cover ${
              isDarkTheme ? 'opacity-30' : 'opacity-20'
            }`}
          />
        </div>
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection /> {/* Added the SkillsSection */}
      </section>

      <section id="timeline">
        <TimelineSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      {/* Sticky CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-medium shadow-lg transition-colors ${
            isDarkTheme
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Let's Connect
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
