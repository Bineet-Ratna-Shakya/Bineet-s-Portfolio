import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'Incredible Work',
    author: 'Important Person',
    role: 'CEO',
  },
  {
    text: 'Incredible Work',
    author: 'Important Person',
    role: 'Entrepreneur',
  },
];

const TestimonialSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-white mb-4">The Buzz</h2>
          <p className="text-gray-400">
            Hear from those who've experienced the journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-lg relative group hover:bg-gray-800 transition-colors duration-300"
            >
              <Quote className="absolute top-4 right-4 text-gray-700 w-8 h-8 transform group-hover:scale-110 transition-transform" />
              <p className="text-gray-300 mb-6 text-lg italic">
                {testimonial.text}
              </p>
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
