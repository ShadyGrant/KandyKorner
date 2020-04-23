import React from "react"

export default ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">Price: ${product.price}</div>
        <div className="product__category">Category: {product.productTypeId}</div>
    </section>
)