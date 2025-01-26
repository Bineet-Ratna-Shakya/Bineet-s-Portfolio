import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title:
      'Document Query Chatbot with Integrated Conversational Form Using LangChain and LLMs',
    description:
      'This chatbot is designed to answer user queries from various documents and includes a conversational form for collecting user information such as Name, Phone Number, and Email. It integrates with APIs such as OpenAI, GPT-J, and LLaMA to provide intelligent and responsive interactions.',
    image:
      'https://images.unsplash.com/photo-1645839057098-5ea8761a6b09?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Chatbot', 'AI', 'OpenAI', 'GPT-J', 'NLP', 'Document Querying'],
    link: 'https://github.com/Bineet-Ratna-Shakya/Document-Query-Chatbot-with-Integrated-Conversational-Form-Using-LangChain-and-LLMs',
    github:
      'https://github.com/Bineet-Ratna-Shakya/Document-Query-Chatbot-with-Integrated-Conversational-Form-Using-LangChain-and-LLMs',
  },
  {
    title: 'AI-Powered-Movie-Recommendations',
    description:
      'Implements a hybrid recommendation system that combines collaborative filtering (using Singular Value Decomposition, SVD) and content-based filtering (using TF-IDF and Cosine Similarity) to provide personalized movie recommendations.',
    image:
      'https://images.unsplash.com/photo-1592513735373-ae19bac7fde8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: [
      'Python',
      'Machine Learning',
      'Collaborative Filtering',
      'SVD',
      'TF-IDF',
      'Cosine Similarity',
      'Deep Learning',
      'Neural Networks',
      'Recommendation System',
      'AI',
      'Data Science',
      'Movie Recommendations',
    ],

    link: 'https://github.com/Bineet-Ratna-Shakya/AI-Powered-Movie-Recommendations',
    github:
      'https://github.com/Bineet-Ratna-Shakya/AI-Powered-Movie-Recommendations',
  },
  {
    title: 'De Novo Drug Design',
    description: 'Ongoing',
    image:
      'https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Generative Adversial Networks'],
    link: '',
    github: '',
  },
];

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore my Work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-black"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    className="text-white hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="text-white hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
