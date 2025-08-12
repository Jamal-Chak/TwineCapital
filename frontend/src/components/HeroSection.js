import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
      >
        Driving Innovation, Powering Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
      >
        Your trusted partner for consulting and software excellence.
      </motion.p>

      {/* ❌ Removed the Explore Our Services button from here */}
    </section>
  );
};

export default HeroSection;
