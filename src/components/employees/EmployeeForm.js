import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory, useParams } from 'react-router-dom';
import { EmployeeCard } from "./Employee";

export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: "",
        manager: false,
        fullTime: false,
        hourlyRate: 0,
        id: 0
    });

    const [isLoading, setIsLoading] = useState(true);
    const { employeeId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
    }

    const handleSaveEmployee = () => {
        if (parseInt(employee.locationId) === 0) {
            window.alert("please select a location")
        } else {
            setIsLoading(true);
            if (employeeId) {
                updateEmployee({
                    name: employee.name,
                    locationId: parseInt(employee.locationId),
                    manager: employee.manager,
                    fullTime: employee.fullTime,
                    hourlyRate: employee.hourlyRate,
                    id: employee.id
                })
                    .then(() => history.push(`/employees/${employee.id}`))
            } else {
                addEmployee({
                    name: employee.name,
                    locationId: parseInt(employee.locationId),
                    manager: employee.manager,
                    fullTime: employee.fullTime,
                    hourlyRate: employee.hourlyRate,
                })
                    .then(() => history.push("/employees"))
            }
        }
    }

    useEffect(() => {
        getLocations().then(() => {
            if (employeeId) {
                getEmployeeById(employeeId)
                    .then(employee => {
                        setEmployee(employee)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{employeeId ? "Edit Employee" : "Add Employee"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee name" value={employee.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input type="text" id="manager" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="true" value={employee.manager} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Time:</label>
                    <input type="text" id="fullTime" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Full Time" value={employee.fullTime} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input type="text" id="hourlyRate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="$00.00" value={employee.hourlyRate} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveEmployee()
                }}>
                {employeeId ? "Save Employee" : "Add Employee"}
            </button>
        </form>
    )
}