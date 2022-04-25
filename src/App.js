import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search.js";

import "./App.css";
import "./Media.css";

export default function App() {
  return (
    <div>
      <Search defaultCity="Oslo" />
    </div>
  );
}
