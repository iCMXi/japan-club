import "./bottom_bar.scss";

import settings from "../settings";
import { useState } from "react";

import { motion } from "framer-motion";

function Bottom_bar() {
  return (
    <div className="bottom-bar">
      <div className="links">
        {settings.links.map((x, n) => (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 * n }}
            className="link"
            key={x.id}
          >
            {x.id}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Bottom_bar;
