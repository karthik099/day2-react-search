import React from "react";

export default function EmployeeList() {

    


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

