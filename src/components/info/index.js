import { useEffect, useState } from "react";

import "./info.scss";

import About from "./about";
import Officers from "./officers";

function Info() {
  const [section, setSection] = useState("about");

  let sections = {
    about: <About />,
    officers: <Officers />,
  };

  return (
    <div className="info">
      <div className="sections">
        {["about", "officers"].map((x) => (
          <div
            className={`section ${x == section ? "selected" : ""}`}
            id={x}
            key={x}
            onClick={() => {
              setSection(x);
            }}
          >
            {section == x ? "🌸 " + x : x}
          </div>
        ))}
      </div>
      <div className="details">{sections[section]}</div>
    </div>
  );
}

export default Info;
