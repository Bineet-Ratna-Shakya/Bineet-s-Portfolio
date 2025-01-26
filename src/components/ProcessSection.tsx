import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const processes = [
  {
    title: "Discovery",
    description: "Initial consultation to understand your goals and challenges",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    title: "Strategy",
    description: "Develop a personalized coaching plan tailored to your needs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    title: "Implementation",
    description: "Regular sessions focused on growth and transformation",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  }
];

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-white mb-4">The Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Embark on a transformative journey through our proven coaching process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl text-white mb-2 flex items-center">
                {process.title}
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
              </h3>
              <p className="text-gray-400">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;