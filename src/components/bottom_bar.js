import "./bottom_bar.scss";

import settings from "../settings";
import { useState } from "react";

import { motion } from "framer-motion";

function BottomBar() {
  const [link, setLink] = useState("");

  return (
    <div className="bottom-bar">
      {link && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="link-card"
        >
          {link}
        </motion.div>
      )}

      <div className="links">
        {settings.links.map((x, n) => (
          <div
            className={`link ${link == x.id ? "selected-link" : ""}`}
            key={x.id}
            onClick={() => {
              if (link == "" || link != x.id) {
                setLink(x.id);
              } else {
                setLink("");
              }
            }}
          >
            {x.id}
            {
              <div
                className="social-img"
                style={{
                  backgroundImage: `url(https://github.com/rmistr00/japan-club/blob/main/src/assets/socials/${x.id}.png)`,
                }}
              ></div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomBar;
