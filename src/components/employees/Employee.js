import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <p className="employee__name">Address: {employee.address}</p>
        <p className="employee__name">{employee.squareFootage} sq. ft</p>
        <p className="employee__name">Handicap Accessible: {employee.handicapAccessible.toLocaleString()}</p>
    </section>
)