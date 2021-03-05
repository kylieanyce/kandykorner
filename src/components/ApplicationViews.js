import { React } from "react";
import { Route } from "react-router-dom";

import { Home } from "./Home";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductProvider } from "./products/ProductProvider";

import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>

            <Route path="/products">
                <ProductProvider>
                    <ProductList />
                </ProductProvider>
            </Route>
        </>
    )
}