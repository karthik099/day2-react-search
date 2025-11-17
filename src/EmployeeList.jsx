import React from "react";

export default function EmployeeList() {

    const employees = [
        { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
        { id: 2, name: "Bob", department: "HR", salary: 55000 },
        { id: 3, name: "Charlie", department: "Finance", salary: 62000 },
        { id: 4, name: "David", department: "Engineering", salary: 72000 },
        { id: 5, name: "Eva", department: "Marketing", salary: 58000 },
        { id: 6, name: "Frank", department: "Operations", salary: 61000 },
        { id: 7, name: "Grace", department: "Design", salary: 65000 },
        { id: 8, name: "Hannah", department: "Sales", salary: 54000 },
        { id: 9, name: "Ian", department: "Customer Support", salary: 50000 },
        { id: 10, name: "Julia", department: "Engineering", salary: 75000 }
    ];

    return (
        <>
        <h2>Employee Details</h2>
        <div style={containerStyle}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Department</th>
                        <th style={{ ...thStyle, textAlign: "right" }}>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td style={tdStyle}>{emp.id}</td>
                            <td style={tdStyle}>{emp.name}</td>
                            <td style={tdStyle}>{emp.department}</td>
                            <td style={{ ...tdStyle, textAlign: "right" }}>
                                {Number(emp.salary).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></>

    );
}

const containerStyle = {
    border: "1px solid #e2e8f0",
    width: 500
};

const thStyle = {
    textAlign: "left",
    padding: 8,
    borderBottom: "1px solid #eee"
};

const tdStyle = {
    padding: 8,
    borderBottom: "1px solid #eee",
    textAlign: "left"
};
