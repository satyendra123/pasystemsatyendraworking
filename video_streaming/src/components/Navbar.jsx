import React from 'react';
import './Navbar.css'
const Navbar = ({Toggle}) => {
    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-transparent p-2">
  <i className="navbar-brand bi bi-justify-left" onClick={Toggle}></i>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Yousof
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Settings</a>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;
