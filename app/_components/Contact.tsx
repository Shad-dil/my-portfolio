import React, { useRef } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const c = useTranslations("contact");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => alert("Your message is Submmited Succefully"), 300);
    form.current?.reset();
    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     () => {
    //       alert("Message sent successfully!");
    //       form.current.reset();
    //     },
    //     () => {
    //       alert("Something went wrong. Please try again later.");
    //     }
    //   );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 lg:px-32 bg-[#0f0f13] text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-200"
      >
        {c("heading")}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {c("sub")}
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-400">
            <p>
              <span className="text-gray-300">{c("location")}</span>
            </p>
            <p>
              <span className="text-gray-300">{c("open_to")}</span>
            </p>
            <p>
              <span className="text-gray-300">{c("role_type")}</span>
            </p>
          </div>

          <div className="flex gap-6 mt-8">
            <motion.a
              href="www.linkedin.com/in/frontend-dev-shad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12 }}
              className="text-gray-300 hover:text-white transition text-3xl"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/Shad-dil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12 }}
              className="text-gray-300 hover:text-white transition text-3xl"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="mailto:helloshad3@gmail.com"
              whileHover={{ scale: 1.12 }}
              className="text-gray-300 hover:text-white transition text-3xl"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-[#131319] border border-white/10 
            p-8 rounded-xl shadow-sm 
            flex flex-col gap-4
            hover:border-white/20 transition
          "
        >
          <input
            type="text"
            name="user_name"
            placeholder={c("name")}
            required
            className="w-full p-3 rounded-lg bg-[#1a1a21] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder={c("email")}
            required
            className="w-full p-3 rounded-lg bg-[#1a1a21] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
          />

          <textarea
            name="message"
            rows={4}
            placeholder={c("message")}
            required
            className="w-full p-3 rounded-lg bg-[#1a1a21] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
          />

          <button
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-gray-200 text-black font-medium
              hover:bg-white transition
            "
          >
            {c("send")}
          </button>
        </motion.form>
      </div>

      <div className="text-center mt-20 text-gray-500 text-sm">
        ©{new Date().getFullYear()} Dilshad — Built with Next & React JS
      </div>
    </section>
  );
};

export default ContactSection;
