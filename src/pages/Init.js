import ItemCount from "../components/ItemCount"
import ItemListContainer from "../components/ItemListContainer"
import React from 'react';

const mensaje = "Welcome to GuitarHouse"

const Init = () => {
    let stock = 8
    return (
        <div >

            <ItemListContainer greetings={mensaje} ></ItemListContainer>
            <ItemCount stock={stock}></ItemCount>
        </div>
    )
}

export default Init;


