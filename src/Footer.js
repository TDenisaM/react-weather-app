import React from "react";

import "./Media.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <span>
        {" "}
        Coded by{" "}
        <a
          href="https://mellifluous-jelly-540b2e.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Denisa M. Tudor{" "}
        </a>
      </span>
      <span>
        (open-source on
        <a
          href="https://github.com/TDenisaM/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
      </span>
      <span>
        and hosted on
        <a
          href="https://fantastic-speculoos-c5d2bc.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        )
      </span>
    </footer>
  );
}
