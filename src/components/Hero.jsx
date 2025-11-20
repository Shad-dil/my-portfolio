import { motion } from "framer-motion";
import { BiDownArrow, BiDownArrowCircle } from "react-icons/bi";
import { BsEye, BsGithub } from "react-icons/bs";

const Hero = () => (
  // <section className="relative min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-gray-100 to-gray-800 overflow-x-hidden">
  //   {/* Background image */}
  //   {/* <div
  //     className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
  //     style={{
  //       backgroundImage:
  //         "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
  //     }}
  //     aria-hidden="true"
  //   /> */}
  //   {/* Overlay */}
  //   {/* <div className="absolute inset-0 bg-white/70 dark:bg-[#0f0f11]/80 z-10" /> */}
  //   <div className="flex justify-between gap-4">
  //     <motion.div
  //       initial={{ opacity: 0, y: 40 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.6 }}
  //       className="relative z-20 max-w-2xl mx-auto px-4"
  //     >
  //       <motion.h1
  //         className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight gradient-title mt-20"
  //         initial={{ opacity: 0, x: -80 }}
  //         animate={{ opacity: 1, x: 0 }}
  //         transition={{ duration: 0.8, ease: "easeOut" }}
  //       >
  //         Hey, I'm Dilshad
  //       </motion.h1>

  //       <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
  //         Frontend Developer | React Specialist | UI Enthusiast
  //       </p>

  //       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  //         <a
  //           href="#projects"
  //           className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm w-[200px] text-center"
  //         >
  //           View My Work
  //         </a>
  //         <a
  //           href="/dev_resume.pdf"
  //           target="_blank"
  //           className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm w-[200px] text-center"
  //           download
  //         >
  //           View My Resume
  //         </a>
  //       </div>
  //     </motion.div>
  //     <div>
  //       <div className="w-100 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-indigo-500 border-r-[50px] border-r-transparent absolute top-20 right-10"></div>

  //       <img
  //         src="/dilshadPic.png"
  //         alt="Hero Illustration"
  //         className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 hidden md:block"
  //       />
  //     </div>
  //   </div>
  // </section>
  <section className="relative bg-gradient-to-b from-blue-500 to-blue-700 text-white overflow-hidden min-h-screen flex flex-col items-center justify-center">
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight gradient-title mt-20"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        MD Dilshad
      </motion.h1>

      <p className="text-base sm:text-lg text-white  mb-6">
        Frontend Developer (React.js | Next.js | UI Performance)
        <br />I build fast, modern, and scalable web applications with React &
        Next.js.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="/dev_resume.pdf"
          target="_blank"
          // Add 'flex items-center justify-center gap-2' to align content horizontally
          className="px-5 py-2 bg-white hover:bg-blue-100 rounded-full text-blue-700 text-sm w-[200px] text-center flex items-center justify-center gap-2"
          download
        >
          View My Resume{" "}
          <BiDownArrowCircle className="inline-block h-4 w-4 ml-1" />
        </a>

        <a
          href="#projects"
          className="px-5 py-2 bg-white hover:bg-blue-100 rounded-full text-blue-700 text-sm w-[200px] text-center"
        >
          View Projects <BsEye className="inline-block h-4 w-4 ml-1" />
        </a>
        <a
          href="https://github.com/Shad-dil"
          target="_blank"
          className="px-5 py-2 bg-white hover:bg-blue-100 rounded-full text-blue-700 text-sm w-[200px] text-center"
        >
          Github <BsGithub className="inline-block h-4 w-4 ml-1" />
        </a>
      </motion.div>

      {/* Floating Profile Image */}
      <div className="relative mt-10">
        <motion.img
          src="/heroimage.png" // 🔁 Replace with your image (e.g., /dilshad.png)
          alt="MD Dilshad"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-xl relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft Glow */}
        <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-2xl"></div>
      </div>
    </div>

    {/* SVG Wave */}
    <svg
      className="absolute bottom-0 left-0 w-full text-white"
      viewBox="0 0 1440 320"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
    </svg>
  </section>
);

export default Hero;
