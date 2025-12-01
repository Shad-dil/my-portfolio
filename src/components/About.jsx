// import { motion } from "framer-motion";
// import { FaReact } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { RiNextjsFill } from "react-icons/ri";
// import { TbBrandRedux } from "react-icons/tb";
// // import { IoLogoJavascript } from "react-icons/io";
// const About = () => (
//   <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="about">
//     <div className="flex flex-col items-center mb-6">
//       <div className="flex justify-center mb-6">
//         <div className="relative w-40 h-40 rounded-full p-[6px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-gradient-spin  hover:scale-105 transition-transform duration-300 ease-in-out">
//           <div className="rounded-full overflow-hidden w-full h-full bg-dark shadow-inner">
//             <img
//               src="/Profile.jpg"
//               alt="Dilshad"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       <h2 className="text-3xl font-semibold">About Me</h2>
//       <p className="text-gray-700 dark:text-gray-400 max-w-3xl text-center">
//         “I’m a Frontend Developer with 3 years of experience building scalable,
//         high-performance web applications using React.js and Next.js. Worked on
//         enterprise banking platforms for GCC clients (UAE, KSA) at Infosys.
//         Passionate about UI performance, API-driven development, and building
//         clean, maintainable interfaces.”
//       </p>
//       <div className="flex flex-wrap justify-center gap-3 mt-6">
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full shadow-md flex gap-1"
//         >
//           <IoLogoJavascript className="mt-1 cursor-pointer" /> Java Script
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="px-4 py-1 bg-purple-600 text-white text-sm rounded-full shadow-md flex gap-1"
//         >
//           <FaReact className="mt-1 cursor-pointer" /> React.Js
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="px-4 py-1 bg-teal-600 text-white text-sm rounded-full shadow-md flex gap-1"
//         >
//           <RiNextjsFill className="mt-1 cursor-pointer" /> Next.Js
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="px-4 py-1 bg-gray-700 text-white text-sm rounded-full shadow-md flex gap-1"
//         >
//           <TbBrandRedux className="mt-1 cursor-pointer" /> Redux-Toolkit
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="px-4 py-1 bg-amber-700 text-white text-sm rounded-full shadow-md flex gap-1"
//         >
//           <TbBrandRedux className="mt-1 cursor-pointer" /> React Testing
//           Library/Jest
//         </motion.span>
//       </div>
//     </div>
//   </section>
// );
// export default About;

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

const About = () => {
  return (
    <section
      id="about"
      className="px-8 py-24 bg-[#0f0f13] text-white relative overflow-hidden"
    >
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Profile Image with Glow Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-40 h-40 mb-6"
        >
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br 
            from-purple-500 via-pink-500 to-blue-500 opacity-60 blur-xl"
          />
          <div className="relative rounded-full overflow-hidden w-40 h-40 border-[3px] border-purple-400 shadow-xl">
            <img
              src="/Profile.jpg"
              alt="Dilshad"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight mb-4"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-gray-300 text-center leading-relaxed max-w-2xl"
        >
          I’m a Frontend Developer with 3 years of experience building scalable,
          high-performance web applications using React.js and Next.js.
          Previously worked on enterprise banking platforms for GCC clients
          (UAE, KSA) at Infosys. I care deeply about UI performance, API-driven
          development, and crafting clean, maintainable interfaces.
        </motion.p>

        {/* Skill Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            {
              icon: <IoLogoJavascript />,
              label: "JavaScript",
              color: "from-yellow-500 to-amber-600",
            },
            {
              icon: <FaReact />,
              label: "React.js",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: <RiNextjsFill />,
              label: "Next.js",
              color: "from-gray-700 to-gray-900",
            },
            {
              icon: <TbBrandRedux />,
              label: "Redux Toolkit",
              color: "from-purple-600 to-purple-700",
            },
            {
              icon: <TbBrandRedux />,
              label: "RTL / Jest",
              color: "from-orange-600 to-amber-700",
            },
          ].map(({ icon, label, color }, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 
              bg-gradient-to-r ${color} text-white shadow-lg border border-white/10`}
            >
              <span className="text-lg">{icon}</span> {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
