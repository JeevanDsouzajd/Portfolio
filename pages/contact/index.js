import Circles from "/components/Circles";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[650px] px-4 sm:px-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-10 text-2xl sm:text-3xl md:text-4xl"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            name="contact"
            method="POST"
            data-netlify="true" // Netlify-specific form handling
            netlify-honeypot="bot-field" // Honeypot field to block bots
            onSubmit={(e) => e.preventDefault()} // Prevent the default submit to handle form processing manually
            className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />{" "}
            {/* Hidden honeypot field */}
            {/* Your form fields go here */}
            {/* For example: */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input w-full sm:max-w-[48%] px-5 py-3 text-sm sm:text-base"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input w-full sm:max-w-[48%] px-5 py-3 text-sm sm:text-base"
                value={formData.email}
                onChange={handleChange}
                style={{ textTransform: "none" }}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input w-full px-5 py-3 text-sm sm:text-base"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea w-full h-40 px-5 py-3 text-sm sm:text-base"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="btn text-sm sm:text-base rounded-full border border-white/50 max-w-[170px] px-6 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[18px]" />
            </button>
          </motion.form>

          {status && <p className="mt-4 text-white text-sm">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
