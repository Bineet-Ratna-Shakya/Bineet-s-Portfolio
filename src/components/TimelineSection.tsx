import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

interface TimelineEntry {
  date: string;
  title: string;
  subtitle: string;
  description?: string;
}

const education: TimelineEntry[] = [
  {
    date: '2022 - 2025',
    title: 'Bachelors of Computing in Artificial Intelligence',
    subtitle: 'London Metropolitan University',
    description: 'Specialized in Machine Learning and Artificial Intelligence',
  },
  {
    date: '2020-2022',
    title: 'Higher Secondary Education',
    subtitle: 'Ullens School',
    description: 'Science with Computer Science',
  },
];

const experience: TimelineEntry[] = [
  {
    date: '2023 - Present',
    title: 'Machine Learning Engineer',
    subtitle: 'AI Research Lab',
    description:
      'Leading research in generative AI and natural language processing',
  },
  {
    date: '2022 - 2023',
    title: 'Data Science Intern',
    subtitle: 'Tech Innovators',
    description: 'Developed predictive models for customer behavior analysis',
  },
];

const certifications: TimelineEntry[] = [
  {
    date: '2023',
    title: 'Deep Learning Specialization',
    subtitle: 'DeepLearning.AI',
    description: 'Comprehensive training in neural networks and deep learning',
  },
  {
    date: '2022',
    title: 'TensorFlow Developer Certificate',
    subtitle: 'Google',
    description: 'Professional certification in TensorFlow development',
  },
];

interface TimelineSectionProps {
  entries: TimelineEntry[];
  title: string;
  icon: React.ReactNode;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  entries,
  title,
  icon,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="p-2 bg-white/10 rounded-lg">{icon}</div>
        <h2 className="text-3xl font-light text-white">{title}</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

        {entries.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-16 pb-12 group"
          >
            <div className="absolute left-[30px] top-0 w-3 h-3">
              <div className="w-full h-full bg-white rounded-full transform group-hover:scale-150 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:animate-none" />
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 transform transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 mb-3">
                {entry.date}
              </span>
              <h3 className="text-xl text-white mb-2">{entry.title}</h3>
              <p className="text-white/60 mb-2">{entry.subtitle}</p>
              {entry.description && (
                <p className="text-white/40">{entry.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-white mb-4">My Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the path that led me to where I am today
          </p>
        </motion.div>

        <TimelineSection
          title="Education"
          entries={education}
          icon={<GraduationCap className="w-6 h-6 text-white" />}
        />

        <TimelineSection
          title="Experience"
          entries={experience}
          icon={<Briefcase className="w-6 h-6 text-white" />}
        />

        <TimelineSection
          title="Certifications"
          entries={certifications}
          icon={<Award className="w-6 h-6 text-white" />}
        />
      </div>
    </section>
  );
};

export default Timeline;
