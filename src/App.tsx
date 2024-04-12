import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import "./App.css";
import Home from "./components/Home";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="flex">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
