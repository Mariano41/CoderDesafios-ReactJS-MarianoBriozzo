import React from "react";
import products from "../app/data.json"


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2500)
    });
};

