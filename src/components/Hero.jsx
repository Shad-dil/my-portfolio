import { motion } from "framer-motion";
import { BiDownArrow, BiDownArrowCircle } from "react-icons/bi";
import { BsEye, BsGithub } from "react-icons/bs";

const Hero = () => (
  // <section className="relative bg-gradient-to-b from-blue-500 to-blue-700 text-white overflow-hidden min-h-screen flex flex-col items-center justify-center">
  //   {/* Content */}
  //   <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
  //     <motion.h1
  //       className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight gradient-title mt-20"
  //       initial={{ opacity: 0, x: -80 }}
  //       animate={{ opacity: 1, x: 0 }}
  //       transition={{ duration: 0.8, ease: "easeOut" }}
  //     >
  //       MD Dilshad
  //     </motion.h1>

  //     <p className="text-base sm:text-lg text-white  mb-6">
  //       Frontend Developer (React.js | Next.js | UI Performance)
  //       <br />I build fast, modern, and scalable web applications with React &
  //       Next.js.
  //     </p>

  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.6 }}
  //       className="flex flex-col sm:flex-row items-center justify-center gap-4"
  //     >
  //       <a
  //         href="/dev_resume.pdf"
  //         target="_blank"
  //         // Add 'flex items-center justify-center gap-2' to align content horizontally
  //         className="px-5 py-2 bg-white hover:bg-blue-100 rounded-full text-blue-700 text-sm w-[200px] text-center flex items-center justify-center gap-2 hover:-translate-y-2 transition-all"
  //         download
  //       >
  //         View My Resume{" "}
  //         <BiDownArrowCircle className="inline-block h-4 w-4 ml-1" />
  //       </a>

  //       <a
  //         href="#projects"
  //         className="px-5 py-2 bg-white hover:bg-blue-100 rounded-full text-blue-700 text-sm w-[200px] text-center hover:-translate-y-2 transition-all"
  //       >
  //         View Projects <BsEye className="inline-block h-4 w-4 ml-1" />
  //       </a>
  //       <a
  //         href="https://github.com/Shad-dil"
  //         target="_blank"
  //         className="px-5 py-2 bg-white hover:bg-blue-100 rounded-full text-blue-700 text-sm w-[200px] text-center hover:-translate-y-2 transition-all"
  //       >
  //         Github <BsGithub className="inline-block h-4 w-4 ml-1" />
  //       </a>
  //     </motion.div>

  //     {/* Floating Profile Image */}
  //     <div className="relative mt-10">
  //       <motion.img
  //         src="/heroimage.png" // 🔁 Replace with your image (e.g., /dilshad.png)
  //         alt="MD Dilshad"
  //         className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-xl relative z-10"
  //         animate={{ y: [0, -10, 0] }}
  //         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  //       />
  //       {/* Soft Glow */}
  //       <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-2xl"></div>
  //     </div>
  //   </div>

  //   {/* SVG Wave */}
  //   <svg
  //     className="absolute bottom-0 left-0 w-full text-white"
  //     viewBox="0 0 1440 320"
  //     fill="currentColor"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
  //   </svg>
  // </section>
  <section className="pt-28 pb-20 text-center bg-[#18012f] text-white">
    <div className="max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold"
      >
        I build <span className="text-[#A26BFF]">dashboards</span> & data-rich
        SaaS UIs
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-4 text-lg text-gray-400"
      >
        Frontend engineer focused on React, Next.js, performance & beautiful,
        usable analytics interfaces.
      </motion.p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="px-5 py-3 rounded-full bg-[#A26BFF] text-black font-medium shadow"
        >
          View Projects <BsEye className="inline-block h-4 w-4 ml-1" />
        </a>
        <a
          href="/dev_resume.pdf"
          className="px-5 py-3 rounded-full border border-white/10 text-white"
        >
          Resume <BiDownArrowCircle className="inline-block h-4 w-4 ml-1" />
        </a>
      </div>

      <div className="mt-10">
        <div className="mx-auto max-w-4xl rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#07070b] p-5">
          <img
            src="/dashboard_preview.png"
            alt="dashboard preview"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
