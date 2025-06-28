const projects = [
  {
    title: 'Dev Dashboard',
    desc: 'Minimal, responsive dashboard UI built with Tailwind and React Charts.',
    link: 'https://github.com/yourusername/dev-dashboard'
  },
  {
    title: 'Mini E-commerce',
    desc: 'Simple ecommerce app with product listings, filters, and cart using React.',
    link: 'https://github.com/yourusername/mini-ecommerce'
  }
];

const Projects = () => (
  <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="projects">
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-100 dark:bg-[#18181c] p-6 rounded-lg border border-gray-300 dark:border-gray-800">
          <h3 className="text-xl font-bold mb-1 text-blue-600 dark:text-blue-300">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{project.desc}</p>
          <a href={project.link} target="_blank" rel="noopener" className="text-blue-500 dark:text-blue-400 hover:underline text-sm">
            View on GitHub ↗
          </a>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
