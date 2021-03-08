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

        
    </section>
)