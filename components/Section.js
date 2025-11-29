"use client";
import { motion } from "framer-motion";

const Section = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-10"
    >
      {children}
    </motion.section>
  );
};

export default Section;
