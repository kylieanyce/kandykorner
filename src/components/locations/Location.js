import React from "react"
import "./Location.css"

export const LocationCard = ({location}) = (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <p className="location__name">{location.address}</p>
        <p className="location__name">{location.squareFootage}</p>
        <p className="location__name">{location.handicapAccessible}</p>
    </section>
)