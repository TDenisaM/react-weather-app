import React from "react";
import "./Footer.css";
import "./Media.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <a
        href="https://github.com/TDenisaM/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source on GitHub
      </a>
      <span>
        {" "}
        coded by{" "}
        <a
          href="https://mellifluous-jelly-540b2e.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Denisa M. Tudor
        </a>
      </span>
    </footer>
  );
}
