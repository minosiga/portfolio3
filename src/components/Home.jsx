import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          A passionate developer crafting beautiful digital experiences
        </p>
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium text-gray-900 dark:text-white"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 