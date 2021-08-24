import React, { useState, useEffect } from "react";

import "./App.css";
import Calculator from "./components/day03-challenge/Calculator/Calculator"
import InputField from "./components/day03-challenge/inputFieldDemo/inputField";
import TenLittleMonkeys from "./components/day03-challenge/TenLittleMonkeys";

function App() {
  // This is a comment
  const welcomeName = "Korrina";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/* <TenLittleMonkeys /> */}
      {/* <InputField /> */}
      <Calculator />
    </div>
  );
}

export default App;