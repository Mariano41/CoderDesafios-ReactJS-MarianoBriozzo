import React from "react"
import fots from "../app/fotos"


const ItemList = ({ products }) => {
    return (
        <div> {
            products.map(product =>
                <div>
                    <p> {product.nombre} <br /> {product.precio}</p>
                    <img src={product.image} alt="imagen de producto" />
                    <br /><br />
                </div>)
        }

        </div>
    )
}

export default ItemList;