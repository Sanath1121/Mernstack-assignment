import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Root from "./components/Root";
import React from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/c";

function App() {
  return (
    <>
      <div className="flex justify-between m-5 p-5 pl-3">
        <A />
        <B />
        <C />
      </div>
    </>
  );
}

export default App;
