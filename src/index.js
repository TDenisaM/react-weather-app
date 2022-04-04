import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search.js";
import ContentWeather from "./Content-Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

import "./App.css";
import "./Media.css";

function App() {
  return (
    <div className="App">
      <div className="cantainer wrapper-container">
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
