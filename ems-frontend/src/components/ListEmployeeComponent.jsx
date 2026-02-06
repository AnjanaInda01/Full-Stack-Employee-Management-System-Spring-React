import React from "react";

function ListEmployeeComponent() {
  const dummyData = [
    {
      id: 1,
      firstName: "Anjana",
      lastname: "Induranga",
      email: "anjanainduranga@gmail.com",
    },
    {
      id: 2,
      firstName: "Malindu",
      lastname: "Hasaranga",
      email: "malinduhasaranga@gmail.com",
    },
    {
      id: 3,
      firstName: "Nimal",
      lastname: "Jayasuriya",
      email: "nimaljayasuriya@gmail.com",
    },
    {
      id: 4,
      firstName: "Oshada",
      lastname: "Nethmina",
      email: "oshadanethmina@gmail.com",
    },
  ];

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
                {dummyData.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastname}</td>
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

            {dummyData.length === 0 && (
              <p className="text-center text-muted">No employees found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
