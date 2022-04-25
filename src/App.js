import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search.js";

import Footer from "./Footer.js";

import "./App.css";
import "./Media.css";

export default function App() {
  return (
    <div className="App">
      <div className="cantainer wrapper-container">
        <Search defaultCity="Oslo" />
        <Footer />
      </div>
    </div>
  );
}
