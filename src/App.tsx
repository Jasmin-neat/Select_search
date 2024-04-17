import React from "react";
// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import "./App.css";
import Home from "./components/Home";
import Chat from "./components/Chat/Chat";
import People from "./components/People/People";
import NavBar from "./components/NavBar/NavBar";
import Knowledge from "./components/Knowledge/Knowledge";

function App() {
  return (
    <div className="flex">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/people" element={<People />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
