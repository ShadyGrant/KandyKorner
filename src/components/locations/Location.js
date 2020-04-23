import React from "react"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.address}</h3>
        <div className="location__space">Square footage: {location.squareFootage}</div>
        <div className="location__handicap">Handicap accessible: {location.handicap ? "Yes":"No" }</div>
    </section>
)