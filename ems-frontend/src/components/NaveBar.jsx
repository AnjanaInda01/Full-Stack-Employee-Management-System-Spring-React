import React from "react";

export default function NaveBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          Employee Management System
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Employees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-employee">
                Add Employee
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
