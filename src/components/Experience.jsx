// export default function Experience() {
//   const jobs = [
//     {
//       role: "Frontend Developer – Infosys",
//       company: "Infosys",
//       duration: "2022 - Present",
//       desc: ["Built reusable UI components using React.js,Tailwind, and Redux Toolkit.","Integrated REST APIs for dashboards and workflows.","Participated in Agile sprints, code reviews, and stand-ups."],
//     },
//     {
//       role: "Project: Digital Banking Portal",
//       company: "Infosys",
//       duration: "2024-Present",
//       desc: ["Revamped banking UI with React.js & Next.js","Improved load speed by 30% and user engagement by 20%","Built modular, user-focused interfaces for customer/admin portals."]
//     },
//   ];

//   return (
//     <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
//       <h2 className="text-3xl font-bold text-cyan-300 mb-12 text-center">
//         Experience
//       </h2>

//       <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-4 before:w-0.5 before:bg-cyan-300/30">
//         {jobs.map((job, index) => (
//           <div key={index} className="ml-12 relative">
//             {/* Timeline dot */}
//             <span className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-cyan-300 shadow-cyan-300 shadow-md"></span>

//             {/* Job Card */}
//             <div className="bg-[#ffffff0d] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
//               <h3 className="text-xl font-semibold text-cyan-300">{job.role}</h3>
//               <p className="text-gray-400">
//                 {job.company} • {job.duration}
//               </p>
//               {job.desc.map((j,i)=> <p key={i} className="mt-2 text-gray-300">{j}</p>)}

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      role: "Frontend Developer – Infosys",
      company: "Infosys",
      duration: "2022 - Present",
      desc: [
        "Built reusable UI components using React.js, Tailwind, and Redux Toolkit.",
        "Integrated REST APIs for dashboards and workflows.",
        "Participated in Agile sprints, code reviews, and stand-ups.",
      ],
    },
    {
      role: "Project: Digital Banking Portal",
      company: "Infosys",
      duration: "2024 - Present",
      desc: [
        "Revamped banking UI with React.js & Next.js.",
        "Improved load speed by 30% and user engagement by 20%.",
        "Built modular, user-focused interfaces for customer/admin portals.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-16 lg:px-32 bg-[#0f0f13] text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-200"
      >
        Experience
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-white/10"></div>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              {/* Dot */}
              <div className="absolute left-[14px] top-2 w-4 h-4 bg-gray-400 rounded-full border border-white/20"></div>

              {/* Card */}
              <div
                className="
                  bg-[#131319] border border-white/10 rounded-xl
                  p-6 shadow-sm hover:shadow-md hover:border-white/20
                  transition-all duration-300
                "
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-200">
                  {job.role}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {job.company} • {job.duration}
                </p>

                <ul className="space-y-1">
                  {job.desc.map((line, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed">
                      • {line}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
