import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/locations">
                <Locations />
            </Route>

            <Route exact path="/products">
                <Products />
            </Route>
        </>
    )
}