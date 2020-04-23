import React, { useContext, useState } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <div className="products">
        {
            products.map(pro => {
                const matchingProductType = productTypes.find(pt => pt.id === pro.productTypeId) 

                return <Product key={pro.id} product={pro}
                productType={matchingProductType} />
            })
        }
    </div>)}
