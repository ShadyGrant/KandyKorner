import React from "react"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location">Location: { location.address }</div>
        <div className="employee__branch">Manager? { employee.manager ? "Yes":"No" }</div>
        <div className="employee__branch">Full-Time? { employee.fullTime ? "Yes":"No" }</div>
        <div className="employee__branch">Hourly Rate: ${ employee.hourlyRate }/hr</div>
    </section>
)