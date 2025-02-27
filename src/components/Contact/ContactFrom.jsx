"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm({
  bgColor = "#EEF1F5",
  bgColor2 = "#FFFFFF",
  borderColor = "#BF1D2F",
  textColor = "#222222",
  buttonBgColor = "#BF1D2F",
}) {
  const [formData, setFormData] = useState({
    to_name: "Md Fahad Kabir",
    from_name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: formData.to_name,
          from_name: formData.from_name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            to_name: "Md Fahad Kabir",
            from_name: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (err) => {
          setIsSubmitting(false);
          setError("Failed to send the message. Please try again later.");
        }
      );
  };
  return (
    <div className="w-full my-auto">
      <motion.div
        className="w-full py-6 px-3 md:p-8 rounded-3xl"
        style={{ backgroundColor: bgColor }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal mb-2"
          style={{ color: textColor }}
        >
          Contact with{" "}
          <span className="poppins-bold-italic" style={{ color: borderColor }}>
            Us
          </span>
        </h2>
        <p
          className="border-2 inline-block px-10 mb-4"
          style={{ borderColor: borderColor }}
        ></p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              id="from_name"
              type="text"
              className="w-full p-1 md:p-2 rounded-md text-sm"
              style={{ backgroundColor: bgColor2, color: textColor }}
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              id="email"
              type="email"
              className="w-full p-1 md:p-2 rounded-md text-sm"
              style={{ backgroundColor: bgColor2, color: textColor }}
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <input
              id="mobile"
              type="tel"
              className="w-full p-1 md:p-2 rounded-md text-sm"
              style={{ backgroundColor: bgColor2, color: textColor }}
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <textarea
              id="message"
              className="w-full p-1 md:p-2 rounded-md text-sm"
              style={{ backgroundColor: bgColor2, color: textColor }}
              placeholder="Your Message"
              rows="2"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full p-1 md:p-2 rounded-md text-white"
            style={{ backgroundColor: buttonBgColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </motion.button>
        </form>
        {isSubmitted && (
          <p className="text-green-500 mt-4">
            Thank you for your response. We will reply you in a moment!
          </p>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </motion.div>
    </div>
  );
}
