import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand ps-3.5" href="#">
          Mentor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link ">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link ">Admin</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link ">Mentor</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link ">Student</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link ">Contact</a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <button
            className="btn btn-outline-success ms-4 nav-item"
            type="button"
          >
            Login
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
