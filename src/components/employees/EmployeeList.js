import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./Employee";
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const history = useHistory()

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            <button onClick={() => { history.push("/employees/create") }}>
                Add Employee
            </button>
            {employees.map(employeeObj => {
                return <EmployeeCard key={employeeObj.id} employee={employeeObj}/>
            })}
        </div>
    )
}