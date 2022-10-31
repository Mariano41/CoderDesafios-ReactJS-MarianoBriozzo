import React from "react";



const Productos = (prop) => {
    return (
        <div>

            {
                prop.datos.map(productos => <p>{productos.name}</p>)
            }

        </div>
    )
}

export default Productos;