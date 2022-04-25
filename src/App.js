import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search.js";

import Footer from "./Footer.js";

import "./App.css";
import "./Media.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card bg-dark text-white App">
          <img
            src="https://source.unsplash.com/600x900/?nature,water"
            alt="..."
            className="bg-img border-0"
          />
          <div className="card-img-overlay m-5 p-5 wrapper-container ">
            <Search defaultCity="Oslo" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
