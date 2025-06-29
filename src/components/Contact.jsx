const Contact = () => (
  <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="contact">
    <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>

    <p className="text-gray-600 dark:text-gray-400 mb-4">
      Want to collaborate or just say hi? Let's connect.
    </p>
    <div className="space-y-2 text-sm grid grid-cols-2">
      <div>
        <a
          href="mailto:hellodilshad3@gmail.com"
          className="block hover:text-blue-500 dark:hover:text-blue-400"
        >
          hellodilshad3@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/shad-dil/"
          target="_blank"
          className="block hover:text-blue-500 dark:hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Shad-dil"
          target="_blank"
          className="block hover:text-blue-500 dark:hover:text-blue-400"
        >
          GitHub
        </a>
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email id ..."
          className="py-2 px-2 w-[500px] text-left text-gray-700 rounded-md "
        />
        <button className="px-2 py-2 mx-3 bg-gray-700 rounded-md">
          Submit
        </button>
      </div>
    </div>
    <div className="flex justify-center items-center my-4">
      <p>Made with 💗</p>
    </div>
  </section>
);
export default Contact;
