import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import Users from "./components/Users";
import FullScreenCamera from './components/FullScreenCamera';
import "./App.css";

const App = () => {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid vh-100 px-0">
      <div className="row gx-0">
        {toggle && (
          <div className="col-2 bg-white vh-100">
            <Sidebar />
          </div>
        )}
        <div className={toggle ? "col-10" : "col-12"}>
          <Routes>
            <Route path="/" element={<Home Toggle={Toggle} />} />
            <Route path="/user" element={<Users  Toggle={Toggle} />} />
            <Route path="/fullscreen" element={<FullScreenCamera />} />
            <Route path="/register" element={<Registration  Toggle={Toggle} />} />
            <Route path="/logout" element={<Logout  Toggle={Toggle} />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
