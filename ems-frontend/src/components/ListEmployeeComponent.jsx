import React, { useEffect, useState } from "react";
import { listEmployee } from "../services/EmployeeService";

function ListEmployeeComponent() {
  const [employees, setEmployees]= useState([]);

  useEffect(()=>{
    listEmployee().then((response)=>{
        setEmployees(response.data);
    }).catch(error=>{
        console.error(error);
    })

  },[])

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Employee List</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle">
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
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {employees.length === 0 && (
              <p className="text-center text-muted">No employees found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
