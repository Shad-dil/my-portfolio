export default function Experience() {
  const jobs = [
    {
      role: "Frontend Developer – Infosys",
      company: "Infosys",
      duration: "2022 - Present",
      desc: ["Built reusable UI components using React.js,Tailwind, and Redux Toolkit.","Integrated REST APIs for dashboards and workflows.","Participated in Agile sprints, code reviews, and stand-ups."],
    },
    {
      role: "Project: Digital Banking Portal",
      company: "Infosys",
      duration: "2024-Present",
      desc: ["Revamped banking UI with React.js & Next.js","Improved load speed by 30% and user engagement by 20%","Built modular, user-focused interfaces for customer/admin portals."]
    },
  ];

  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-cyan-300 mb-12 text-center">
        Experience
      </h2>

      <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-4 before:w-0.5 before:bg-cyan-300/30">
        {jobs.map((job, index) => (
          <div key={index} className="ml-12 relative">
            {/* Timeline dot */}
            <span className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-cyan-300 shadow-cyan-300 shadow-md"></span>

            {/* Job Card */}
            <div className="bg-[#ffffff0d] backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
              <h3 className="text-xl font-semibold text-cyan-300">{job.role}</h3>
              <p className="text-gray-400">
                {job.company} • {job.duration}
              </p>
              {job.desc.map((j,i)=> <p key={i} className="mt-2 text-gray-300">{j}</p>)}
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
