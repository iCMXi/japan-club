import { motion } from "framer-motion";

function Officers() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="officers"
    >
      officers
    </motion.div>
  );
}

export default Officers;
