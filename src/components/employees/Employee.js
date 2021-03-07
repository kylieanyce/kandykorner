import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom";

export const EmployeeCard = ({ employee }) => (
    <section className="employee">

        <h3 className="employee__name">
            <Link to={`/employees/details/${employee.id}`}>
                {employee.name}
            </Link>
        </h3>

        {/* <p className="employee__name">Manager: {employee.manager.toLocaleString()}</p>
        <p className="employee__name">Full Time: {employee.fullTime.toLocaleString()}</p>
        <p className="employee__name">Hourly Rate: {employee.hourlyRate}</p>
        <p className="employee__name">Location: {employee.location?.name}</p> */}
    </section>
)