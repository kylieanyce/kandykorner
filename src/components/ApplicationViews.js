import { React } from "react";
import { Route } from "react-router-dom";

import { Home } from "./Home";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypesProvider } from "./products/ProductTypes";
import { EmployeeProvider } from "./employees/EmployeeProvider";

import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";
import { EmployeeList } from "./employees/EmployeeList";

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
                    <ProductTypesProvider>
                        <ProductList />
                    </ProductTypesProvider>
                </ProductProvider>
            </Route>

            <Route path="/employees">
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>
        </>
    )
}