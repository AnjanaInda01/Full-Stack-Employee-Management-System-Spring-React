import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const isGmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
};

function EmployeeComponent() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const isFormValid =
    employee.firstName.trim() !== "" &&
    employee.lastName.trim() !== "" &&
    isGmail(employee.email);

  const navigator = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  function saveEmployee(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid) {
      return;
    }

    createEmployee(employee)
      .then(() => {
        alert("Employee added successfully!");
        navigator("/employees");
      })
      .catch(() => {
        alert("Failed to add employee.");
      });
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0 text-center">Add New Employee</h5>
        </div>

        <div className="card-body">
          <form onSubmit={saveEmployee}>
            {/* First Name */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  submitted
                    ? employee.firstName
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }`}
                name="firstName"
                value={employee.firstName}
                onChange={handleChange}
              />
              <div className="invalid-feedback">First Name is required</div>
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  submitted
                    ? isGmail(employee.lastName)
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }`}
                name="lastName"
                value={employee.lastName}
                onChange={handleChange}
              />
              <div className="invalid-feedback">Last Name is required</div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  submitted
                    ? isGmail(employee.email)
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }`}
                name="email"
                value={employee.email}
                onChange={handleChange}
              />

              <div className="invalid-feedback">
                Email must be a valid @gmail.com address
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button
                type="submit"
                className="btn btn-success"
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigator("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
