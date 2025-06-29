const projects = [
  {
    title: "FastPizza – React + Redux App",
    desc: "A dynamic pizza ordering app using React, Redux Toolkit, and Tailwind — with real-time cart updates and smooth navigation.",
    Githublink: "https://github.com/Shad-dil/fastReactPizzaCo",
    Livelink: "https://fast-react-pizza-coo.vercel.app/",
  },
  {
    title: "Mini E-commerce",
    desc: "Simple ecommerce app with product listings, filters, and cart using React.",
    Githublink: "https://github.com/Shad-dil/fastReactPizzaCo",
    Livelink: "https://fast-react-pizza-coo.vercel.app/",
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
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
            {project.desc}
          </p>
          <a
            href={project.Livelink}
            target="_blank"
            rel="noopener"
            className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
          >
            View on Live ↗
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
      ))}
    </div>
  </section>
);
export default Projects;
