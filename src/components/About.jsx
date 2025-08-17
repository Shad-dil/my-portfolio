import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
// import { IoLogoJavascript } from "react-icons/io";
const About = () => (
  <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="about">
    <div className="flex flex-col items-center mb-6">
      <div className="flex justify-center mb-6">
        <div className="relative w-40 h-40 rounded-full p-[6px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-gradient-spin  hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="rounded-full overflow-hidden w-full h-full bg-dark shadow-inner">
            <img
              src="/Profile.jpg"
              alt="Dilshad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="text-gray-700 dark:text-gray-400 max-w-3xl text-center">
        “I’m a frontend developer with 3 years’ experience crafting scalable
        interfaces in React and Next.js. I enjoy working with design systems,
        clean UI, and optimizing performance.”
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full shadow-md flex gap-1"
        >
          <IoLogoJavascript className="mt-1 cursor-pointer" /> Java Script
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="px-4 py-1 bg-purple-600 text-white text-sm rounded-full shadow-md flex gap-1"
        >
          <FaReact className="mt-1 cursor-pointer" /> React.Js
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="px-4 py-1 bg-teal-600 text-white text-sm rounded-full shadow-md flex gap-1"
        >
          <RiNextjsFill className="mt-1 cursor-pointer" /> Next.Js
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="px-4 py-1 bg-gray-700 text-white text-sm rounded-full shadow-md flex gap-1"
        >
          <TbBrandRedux className="mt-1 cursor-pointer" /> Redux-Toolkit
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="px-4 py-1 bg-amber-700 text-white text-sm rounded-full shadow-md flex gap-1"
        >
          <TbBrandRedux className="mt-1 cursor-pointer" /> React Testing Library/Jest
        </motion.span>
      </div>
    </div>
  </section>
);
export default About;
