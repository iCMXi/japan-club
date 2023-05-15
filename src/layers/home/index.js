import "./home.scss";

import logo from "../../assets/logo.jpeg";
import { useEffect } from "react";

import { motion } from "framer-motion";

function Home() {
  let string = "Welcome to Japan Club!".split("");

  string = string.map((c, n) => (
    <motion.div
      initial={{ x: 20, opacity: 0, y: 10 }}
      animate={{ x: 0, opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * n, repeat: Infinity, repeatDelay: 2 }}
      className="letter"
      key={n}
    >
      {c}
    </motion.div>
  ));

  return (
    <div className="home">
      <div className="title">{string}</div>
      <img className="logo" src={logo} />
    </div>
  );
}

export default Home;
