import "./home.scss";

import logo from "../../assets/logo.jpeg";
import { useEffect } from "react";

import { motion } from "framer-motion";

import Info from "../../components/info";

import BottomBar from "../../components/bottom_bar";

function Home() {
  return (
    <div className="home">
      <div className="title">Welcome to Japan Club!</div>
      <img className="logo" src={logo} />

      {<Info />}

      <BottomBar />
    </div>
  );
}

export default Home;
