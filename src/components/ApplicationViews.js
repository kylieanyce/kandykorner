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

import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeDetail } from "./employees/EmployeeDetail";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypesProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductTypesProvider>
            </ProductProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <Route path="/employees/details">
                    <EmployeeDetail />
                </Route>
                <Route path="/employees/create">
                    <EmployeeForm />
                </Route>
            </EmployeeProvider>
        </>
    )
}