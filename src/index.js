import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search.js";
import ContentWeather from "./Content-Weather.js";
//import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

import "./App.css";
import "./Media.css";

function App() {
  return (
    <div className="App">
      <div className="cantainer wrapper-container">
        <Search />
        <ContentWeather />

        <Footer />
      </div>
    </div>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
