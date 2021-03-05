import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        return fetch("http://localhost:8088/products/?_expand=productTypes")
        .then(res => res.json())
        .then(setProducts)
    }

    const getProductById = (id) => {
        return fetch(`http://localhost:8088/products/${id}?_embed=productTypes`)
        .then(res => res.json())
    }

    return (
        <ProductContext.Provider value={{
            products, getProducts, getProductById
            }}>
                {props.children}
            </ProductContext.Provider>
    )
}