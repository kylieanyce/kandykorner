import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <p className="location__name">Address: {location.address}</p>
        <p className="location__name">{location.squareFootage} sq. ft</p>
        <p className="location__name">Handicap Accessible: {location.handicapAccessible.toLocaleString()}</p>
    </section>
)