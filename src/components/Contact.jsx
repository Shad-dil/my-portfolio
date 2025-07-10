import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const handleSubmit = () => {
    if (!email || email.length === 0) setError({ email: "Please Enter email" });
    console.log("submittedd");
  };
  return (
    <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="contact">
      <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Want to collaborate or just say hi? Let's connect.
      </p>
      <div className="space-y-2 text-sm grid grid-cols-1 sm:grid-cols-2">
        <div>
          <a
            href="mailto:hellodilshad3@gmail.com"
            className="flex hover:text-blue-500 dark:hover:text-blue-400 gap-1"
          >
            <CgMail className="mt-1" /> hellodilshad3@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/shad-dil/"
            target="_blank"
            className="flex hover:text-blue-500 dark:hover:text-blue-400 gap-1"
          >
            <FaLinkedin className="mt-1" /> LinkedIn
          </a>
          <a
            href="https://github.com/Shad-dil"
            target="_blank"
            className=" hover:text-blue-500 dark:hover:text-blue-400 flex gap-1"
          >
            <FaGithub className="mt-1" /> GitHub
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email id ..."
            className="py-2 px-2 w-full text-left text-gray-700 rounded-md"
          />
          <button
            className="w-full sm:w-auto px-4 py-2 bg-gray-700 rounded-md text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <br />
        <span className="text-red-500">{error.email}</span>
      </div>
      <div className="flex justify-center items-center mt-4">
        © 2025 Dilshad.dev — Built with React.js & Tailwind CSS
      </div>
    </section>
  );
};
export default Contact;
