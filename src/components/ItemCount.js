import React, { useState } from 'react'

const ItemCount = ({ stock }) => {


    const [contador, setContador] = useState(1)

    const agregarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

    return (
        <div >
            <div >
                <p> GUITARRA ELÉCTRICA</p>
                <div>
                    <p>Stock disponible: {stock}</p></div>
                <div className='BTN-div'>
                    <button onClick={restarContador} disabled={contador <= 0}>-</button>
                    <p>&nbsp; &nbsp; {contador} &nbsp; &nbsp;</p>
                    <button onClick={agregarContador} disabled={contador >= stock}>+</button>
                </div>
            </div>


        </div>
    )
}

export default ItemCount