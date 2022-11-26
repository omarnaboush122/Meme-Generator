import "./App.css";
import Content from "./Content";
import Navbar from "./Navbar";
import { useState } from "react";

const App = () => {

  return (
    <div className="container">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
