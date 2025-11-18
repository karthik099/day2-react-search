import React from 'react'
import "./List.css"


const List = ({ data }) => {
    console.log("List Data:", data);
    return (
        <>
            <table className={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th className="table-th">ID</th>
                        <th className="table-th">Name</th>
                        <th className="table-th">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((emp) => (
                        <tr key={emp.id}>
                            <td className="table-td">{emp.id}</td>
                            <td className="table-td">{emp.name}</td>
                            <td className="table-td">{emp.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    );
}

export default List