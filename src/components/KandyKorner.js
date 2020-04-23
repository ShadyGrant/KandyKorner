import React from "react"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import "./locations/Location.css"
import ProductList from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"
import "./products/Product.css"
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import "./employees/Employee.css"

export default () => (
    <>
        <h2> Welcome to KandyKorner!!</h2>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Products</h2>
        <ProductProvider>
           <ProductTypeProvider>
               <ProductList />
           </ProductTypeProvider>
        </ProductProvider>

        <h2>Employees</h2>
        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>
    </>
)