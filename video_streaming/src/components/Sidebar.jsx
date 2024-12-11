import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="custom-h-icon me-2 fs-4">H</i>
        <span className="brand-name fs-4">Housys</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-4 me-2"></i>
          <span className="fs-5">Dashboard</span>
        </Link>
        <Link to="/register" className="list-group-item py-2">
          <i className="bi bi-house fs-4 me-2"></i>
          <span className="fs-5">Registration</span>
        </Link>
        <Link to="/dashboard" className="list-group-item py-2">
          <i className="bi bi-table fs-4 me-2"></i>
          <span className="fs-5">Dashboard</span>
        </Link>
        <Link to="/setting" className="list-group-item py-2">
          <i className="bi bi-clipboard fs-4 me-2"></i>
          <span className="fs-5">Setting</span>
        </Link>
        <Link to="/user" className="list-group-item py-2">
          <i className="bi bi-person fs-4 me-2"></i>
          <span className="fs-5">User</span>
        </Link>
        <Link to="/logout" className="list-group-item py-2">
          <i className="bi bi-power fs-4 me-2"></i>
          <span className="fs-5">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
