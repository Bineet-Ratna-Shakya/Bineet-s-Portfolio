import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Lightbulb } from 'lucide-react';

const skills = [
  { icon: Code, label: 'Development', level: 90 },
  { icon: Palette, label: 'Design', level: 85 },
  { icon: Lightbulb, label: 'Strategy', level: 95 },
];

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/10050584/pexels-photo-10050584.jpeg"
              alt="Profile"
              className="w-full h-[500px] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-light text-white mb-6">
              Solutions that Inspire & Deliver.
            </h2>
            <p className="text-gray-400 mb-8"></p>

            <div className="space-y-6">
              {skills.map((Skill, index) => (
                <motion.div
                  key={Skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex items-center mb-2">
                    <Skill.icon className="w-5 h-5 text-white mr-2" />
                    <span className="text-white">{Skill.label}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${Skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
