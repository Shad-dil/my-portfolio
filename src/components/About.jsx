const About = () => (
  <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="about">
    <div className="flex flex-col items-center mb-6">
      <img
        src="/Profile.jpg" // Replace with your actual photo path
        alt="My portrait"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-md mb-4"
      />
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="text-gray-700 dark:text-gray-400 max-w-3xl text-center">
        I'm a frontend developer with ~3 years of experience building
        performant, accessible web interfaces using React, Redux, and Tailwind
        CSS. I'm passionate about creating elegant, responsive UIs and love
        minimal, functional design.
      </p>
    </div>
  </section>
);
export default About;
