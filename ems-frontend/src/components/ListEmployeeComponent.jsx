import React, { useEffect, useState } from "react";
import { listEmployee, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listEmployee()
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/edit-employee/${id}`);
  }

  function handleDeleteEmployee(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id)
        .then(() => {
          alert("Employee deleted successfully!");
          // Refresh the list after deletion
          setEmployees(employees.filter((emp) => emp.id !== id));
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to delete employee.");
        });
    }
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        {/* Card Header */}
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center flex-wrap">
          <h5 className="mb-0">Employee List</h5>
          <button
            className="btn btn-sm btn-success mt-2 mt-sm-0"
            onClick={addNewEmployee}
          >
            + Add Employee
          </button>
        </div>

        {/* Card Body */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {employees.length > 0 ? (
                  employees.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.firstName}</td>
                      <td>{emp.lastName}</td>
                      <td>{emp.email}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-primary me-2 mb-1"
                          onClick={() => updateEmployee(emp.id)}
                        >
                          Update
                        </button>
                        <button className="btn btn-sm btn-danger mb-1" onClick={() => handleDeleteEmployee(emp.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-3">
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
