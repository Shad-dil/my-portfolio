import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS dashboard
        "YOUR_TEMPLATE_ID", // from EmailJS dashboard
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS dashboard
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Failed...", error.text);
          alert("Something went wrong. Try again later!");
        }
      );
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-cyan-300 drop-shadow-[0_0_10px_#00f5d4] mb-12">
        Contact Me
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <p className="text-gray-300 text-lg mb-4 text-center">
            Let’s connect! You can reach out via email or find me on social
            media.
          </p>
          <div className="flex gap-6 text-cyan-300 text-3xl">
            <motion.a
              href="https://github.com/Shad-dil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shad-dil/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:helloshad3@gmail.com"
              whileHover={{ scale: 1.2 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      <div>© 2025 Dilshad.dev — Built with React.js & Tailwind CSS</div>
    </section>
  );
};

export default ContactSection;



// © 2025 Dilshad.dev — Built with React.js & Tailwind CSS
