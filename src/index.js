import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search.js";
import ContentWeather from "./Content-Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

import "./App.css";
import "./Media.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper-container">
        <Search />
        <ContentWeather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
