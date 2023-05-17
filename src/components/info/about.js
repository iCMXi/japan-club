import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="about"
    >
      about
    </motion.div>
  );
}

export default About;
