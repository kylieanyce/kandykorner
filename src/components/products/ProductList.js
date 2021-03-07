import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypesContext } from "./ProductTypes"
import { ProductCard } from "./Product"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypesContext)

    useEffect(() => {
        getProductTypes()
        .then(getProducts)
    }, [])

    return (
        <div className="products">
            {products.map(productObj => {
                const matchingProductType = productTypes.find(typeObj => typeObj.id === productObj.productTypeId)
                return <ProductCard key={productObj.id} product={productObj} productType={matchingProductType}/>
            })}
        </div>
    )
}