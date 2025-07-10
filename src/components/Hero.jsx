import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-white dark:from-[#0f0f11] to-gray-100 dark:to-[#141417] overflow-x-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
      }}
      aria-hidden="true"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-white/70 dark:bg-[#0f0f11]/80 z-10" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-20 max-w-2xl mx-auto px-4"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight gradient-title mt-20"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hey, I'm Dilshad
      </motion.h1>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
        Frontend Developer | React Specialist | UI Enthusiast
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#projects"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm w-[200px] text-center"
        >
          View My Work
        </a>
        <a
          href="/dev_resume.pdf"
          target="_blank"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm w-[200px] text-center"
          download
        >
          View My Resume
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
