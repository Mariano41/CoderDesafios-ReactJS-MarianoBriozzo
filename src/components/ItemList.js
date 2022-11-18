import React from "react"
import fots from "../app/fotos"


const ItemList = ({ products }) => {
    return (
        <> {
            products.map(product =>
                <>
                    <p> {product.nombre} <br /> {product.precio}</p>
                    <img src={product.image} alt="imagen de producto" />
                    <br /><br />
                </>)
        }

        </>
    )
}

export default ItemList;