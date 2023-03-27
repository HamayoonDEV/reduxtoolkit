import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightside from "./components/Rightside";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Sidebar />
        <Feed />
        <Rightside />
      </div>
    </div>
  );
}

export default App;
