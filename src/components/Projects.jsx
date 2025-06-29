const projects = [
  {
    title: "FastPizza – React + Redux App",
    desc: "A dynamic pizza ordering app using React, Redux Toolkit, and Tailwind — with real-time cart updates and smooth navigation.",
    Githublink: "https://github.com/Shad-dil/fastReactPizzaCo",
    Livelink: "https://fast-react-pizza-coo.vercel.app/",
    screenshot: "/pizzass.png", // Add your screenshot path here
  },
  {
    title: "Mini E-commerce",
    desc: "Simple ecommerce app with product listings, filters, and cart using React.",
    Githublink: "https://github.com/Shad-dil/fastReactPizzaCo",
    Livelink: "https://fast-react-pizza-coo.vercel.app/",
    screenshot: "/screenshots/miniecommerce.png", // Add your screenshot path here
  },
];

const Projects = () => (
  <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="projects">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gray-100 dark:bg-[#18181c] p-6 rounded-lg border border-gray-300 dark:border-gray-800"
        >
          <h3 className="text-xl font-bold mb-1 text-blue-600 dark:text-blue-300">
            {project.title}
          </h3>
          {project.screenshot && (
            <div className="relative mb-3 group cursor-pointer">
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full h-40 object-cover rounded border border-gray-200 dark:border-gray-700 
                 "
              />
              <div className="absolute inset-0 rounded bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Preview
                </span>
              </div>
            </div>
          )}
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
            {project.desc}
          </p>
          <div className="flex justify-between">
            <a
              href={project.Livelink}
              target="_blank"
              rel="noopener"
              className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
            >
              View Live ↗
            </a>
            <a
              href={project.Githublink}
              target="_blank"
              rel="noopener"
              className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
            >
              View on GitHub ↗
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
