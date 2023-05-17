import "./bottom_bar.scss";

import settings from "../settings";
import { useState } from "react";

import { motion } from "framer-motion";

function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="links">
        {settings.links.map((x, n) => (
          <div className="link" key={x.id}>
            {x.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomBar;
