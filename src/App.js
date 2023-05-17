import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./test";

import Home from "./layers/home";

import { motion } from "framer-motion";

const Pages = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="App"
    >
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </motion.div>
  );
}

export default App;
