import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

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
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid) {
      return;
    }

    // 2️⃣ Update if editing
    if (id) {
      updateEmployee(id, employee)
        .then(() => {
          alert("Employee updated successfully!");
          navigator("/employees");
        })
        .catch(() => {
          alert("Failed to update employee.");
        });
      return; // Important: exit function
    } else {
      createEmployee(employee)
        .then(() => {
          alert("Employee added successfully!");
          navigator("/employees");
        })
        .catch(() => {
          alert("Failed to add employee.");
        });
    }
  }

  function pageTitle() {
    if (id) {
      return <h5 className="mb-0 text-center">Update Employee</h5>;
    } else {
      return <h5 className="mb-0 text-center">Add New Employee</h5>;
    }
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-header bg-primary text-white">{pageTitle()}</div>

        <div className="card-body">
          <form onSubmit={saveOrUpdateEmployee}>
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
                    ? employee.lastName
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
              <button type="submit" className="btn btn-success">
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
