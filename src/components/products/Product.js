import React from "react"
import "./Product.css"

export const ProductCard = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__">Price: ${product.price}</p>
        <p className="product__">Type: {productType.productType}</p>
    </section>
)