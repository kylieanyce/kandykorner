import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"

import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const { getEmployeeById } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})

    const { employeeId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getEmployeeById(employeeId)
            .then((response) => {
                setEmployee(response)
            })
    }, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location?.name}</div>
            <p className="employee__manager">Manager: {employee.manager === true ? "Yes" : "No"}</p>
            <p className="employee__fullTime">Full Time: {employee.fullTime === true ? "Yes" : "No"}</p>
            <p className="employee__hourlyRate">Hourly Rate: {employee.hourlyRate}</p>
            <button onClick={() => {
                history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button>
        </section>
    )
}