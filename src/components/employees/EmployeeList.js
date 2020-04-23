import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"
import { LocationContext } from "../locations/LocationProvider"


export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="employees">
        {
            employees.map(emp => {
                const matchingLocation = locations.find(loc => loc.id === emp.locationId) 

                return <Employee key={emp.id} employee={emp}
                location={matchingLocation} />
            })
        }
    </div>)}
